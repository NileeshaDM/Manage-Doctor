const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  DoctorRegisterCtrl,
  getAllDoctorsController,
  getDoctorInfoByDoctorIdController,
  bookAppointmentByUserController,
  updateDoctorProfile,
  bookingAvailabilityController,
  getAppointmentListController,
  changeAppointmentStatusController,
  getDoctorAppointmentByIdController,
  deleteDoctorController,
} = require("../../controllers/doctorControllers");


//REGISTER || POST
const storage = multer.diskStorage({
  destination:(req, file, cb) => {
    cb(null, "./frontend/src/assets/images/Doctor-img");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });
router.post("/register_doctor", /*upload.single("photo"),*/ DoctorRegisterCtrl);

//update Doctor Information
router.post("/updateDoctorInfo", /*upload.single("photoName"),*/ updateDoctorProfile); // need authmiddleware

//delete doctor profile
router.delete("/deleteDoctorProfile/:id", deleteDoctorController);

//GET DOCTORS FOR CARDS || GET
router.get("/getDoctorsForCards", getAllDoctorsController); // need authmiddleware

//getting Doctor Information || POST
router.get("/getDoctorInfoById/:doctorId", getDoctorInfoByDoctorIdController); // need authmiddleware

//book appointment by user || POST
router.post("/bookAppointmentByUser", bookAppointmentByUserController); // need authmiddleware

//booking availability
router.post("/checkBookingAvailability", bookingAvailabilityController); // need authmiddleware

// getting appointments List
router.get("/getAppointmentsByUserId", getAppointmentListController);

// getting appointments List
router.get("/getAppointmentsByDoctorId/:_id", getDoctorAppointmentByIdController);

//GET METHOD || DOCTORSCHANGESTATUS
router.post('/changeAppointmentStatus', changeAppointmentStatusController);

module.exports = router;
