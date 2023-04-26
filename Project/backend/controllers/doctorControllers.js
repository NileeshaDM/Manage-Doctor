const appointmentModel = require("../models/appointmentsModel");
const Doctor = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

// register callback
const DoctorRegisterCtrl = async (req, res) => {
  try {
    const existingDoctor = await Doctor.findOne({ email: req.body.email });
    if (existingDoctor) {
      return res
        .status(200)
        .send({ message: "Doctor already Exist", success: false });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    
    const newDoctor = new Doctor({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      // photo: req.file.originalname,
      timings: req.body.timings,
      specialization: req.body.specialization,
      experience: req.body.experience,
      designation: req.body.designation,
    });
    newDoctor.isDoctor = true;
    await newDoctor.save();
    res
      .status(201)
      .send({ message: "Doctor Registration Successful", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Doctor Register Controller Error",
      error: error.message,
    });
  }
};

//update doctor profile
const updateDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOneAndUpdate(
      { _id: req.body.doctorId },
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        // photo: req.file.originalname,
        timings: req.body.timings,
        specialization: req.body.specialization,
        experience: req.body.experience,
        designation: req.body.designation,
      }
    );
    res.status(200).send({
      success: true,
      message: "Doctor info updated successfully",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error Updating Doctor Info",
      success: false,
      error,
    });
  }
};

// const deleteDoctorController = async (req, res) => {
//   try {
//     const doctor = await Doctor.findOneAndDelete({ _id: req.params.doctorId });
//     res.status(200).send({
//       success: true,
//       message: "Doctor info deleted successfully",
//       data: doctor,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       message: "Error Deleting Doctor Info",
//       success: false,
//       error,
//     });
//   }
// }

const deleteDoctorController = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).send('No doctor with that id');
  }

  const doctor = await Doctor.findByIdAndRemove({_id: id});

  if(!doctor){
    return res.status(404).send('No doctor with that id');
  }

  res.json({message: 'Doctor deleted successfully'});
}

//get all doctors
const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await Doctor.find({ isDoctor: "true" });

    res.status(200).send({
      success: true,
      message: "Doctors data List fetched Successfully",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while fetching Doctors data",
      error,
    });
  }
};

// to get information of Doctor by Id
const getDoctorInfoByDoctorIdController = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.params.doctorId });
    console.log(req.params.doctorId);
    if (doctor) {
      res.status(200).send({
        success: true,
        message: "Doctor info fetched successfully",
        data: doctor,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error Getting Doctor Info",
      success: false,
      error,
    });
  }
};

// user booking appointments
const bookAppointmentByUserController = async (req, res) => {
  try {
    req.body.status = "pending";
    req.body.date = dayjs(req.body.date, "DD-MM-YYYY").toISOString();
    req.body.time = dayjs(req.body.time, "HH:mm").toISOString();
    const newAppointment = new appointmentModel(req.body);
    await newAppointment.save();
    //pushing notification to doctor based on his userid
    const doctor = await Doctor.findOne({ _id: req.body.doctorInfo.userId });
    // user.unseenNotifications.push({
    //   type: "new-appointment-request",
    //   message: `A new appointment request has been made by ${req.body.userInfo.name}`,
    //   onClickPath: "/doctor/appointments",
    // });
    // await user.save();
    res.status(200).send({
      message: "Appointment booked successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error booking appointment",
      success: false,
      error,
    });
  }
};

// check bookings are available
const bookingAvailabilityController = async (req, res) => {
  try {
    const date = dayjs(req.body.date, "DD-MM-YYYY").toISOString();
    const fromTime = dayjs(req.body.time, "HH:mm")
      .subtract(1, "hours")
      .toISOString();
    const toTime = dayjs(req.body.time, "HH:mm").add(1, "hours").toISOString();
    const doctorId = req.body.doctorId;
    const appointments = await appointmentModel.find({
      doctorId,
      date,
      time: { $gte: fromTime, $lte: toTime },
    });
    if (appointments.length > 0) {
      return res.status(200).send({
        message: "Appointments not available",
        success: false,
      });
    } else {
      return res.status(200).send({
        message: "Appointments available",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error In Booking Availability",
    });
  }
};

//get all appointment lists for user
const getAppointmentListController = async (req, res) => {
  try {
    const appointments = await appointmentModel.find({ userInfo: req.body.userInfo });
    res.status(200).send({
      success: true,
      message: "Appointments List fetched Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching appointments",
      error,
    });
  }
};

//get all appointment lists for doctor
const getDoctorAppointmentByIdController = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ _id: req.params._id });
    const appointments = await appointmentModel.find({ doctorId: req.params._id });
    res.status(200).send({
      success: true,
      message: "Appointments List fetched Successfully",
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching appointments",
      error,
    });
  }
};

//change status to approve appointment
const changeAppointmentStatusController = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;
    const appointment = await appointmentModel.findByIdAndUpdate(
      appointmentId,
      { status }
    );

    // const user = await Doctor.findOne({ _id: appointment.userId });
    // const unseenNotifications = user.unseenNotifications;
    // unseenNotifications.push({
    //   type: "appointment-status-changed",
    //   message: `Your appointment has been ${status}`,
    //   onclickPath: "/appointments",
    // });
    // await User.findByIdAndUpdate(user._id, { unseenNotifications });

    // await user.save();

    res.status(200).send({
      message: "Appointment status updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error changing appointment status",
      error,
    });
  }
};
module.exports = {
  DoctorRegisterCtrl,
  getAllDoctorsController,
  getDoctorInfoByDoctorIdController,
  bookAppointmentByUserController,
  updateDoctorProfile,
  bookingAvailabilityController,
  getAppointmentListController,
  getDoctorAppointmentByIdController,
  changeAppointmentStatusController,
  deleteDoctorController,
};
