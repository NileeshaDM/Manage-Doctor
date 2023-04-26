import { DatePicker, TimePicker, message } from "antd";
import axios from "axios";
// import moment from "moment";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../../components/Online-shopping-components/Store";
import { useContext } from "react";

// import "./BookAppointment.css";
// import Img from "../../assets/images/home-banner-image.png";

function BookAppointment() {
  // const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [isAvailable, setIsAvailable] = useState(false);
  const {state , dispatch : ctxDispatch} = useContext(Store);
    const {userInfo } = state
  const getDoctorData = async () => {
    try {
      const res = await axios.get(`/api/doctor/getDoctorInfoById/${params.doctorId}`,
        { doctorId: params.doctorId }
        // {
        //   headers: {
        //     Authorization: "Bearer " + localStorage.getItem("token"),
        //   },
        // }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // =============== booking function =====================
  const handleBooking = async () => {
    setIsAvailable(false); //--
    try {
      // setIsAvailable(true);
      // if (!date && !time) {
      //   return alert("Date & Time Required");
      // }
      const res = await axios.post(
        "/api/doctor/bookAppointmentByUser", //change to user
        {
          doctorId: params.doctorId,
          userId: userInfo._id,
          doctorInfo: doctors,
          userDes: userInfo,
          date: date,
          time: time,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      );
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ==================== handle availability ===========================
  const handleAvailability = async () => {
    try {
      const res = await axios.post(
        "/api/doctor/checkBookingAvailability",
        { doctorId: params.doctorId, date: date, time: time },
        {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem("token")}`,
          // },
        }
      );
      if (res.data.success) {
        message.success(res.data.message);
        setIsAvailable(true);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorData();
    console.log("getDoctorData()");
    //eslint-disable-next-line
  }, []);
  
  return (
    <div className="container m-2 p-4 border shadow rounded">
      {doctors && (
        <div className="d-flex">
          <div className="p-4">
            <h5 className="mb-5">
              Dr.{doctors.name} ({doctors.designation}){" "}
            </h5>
            <img
              src="https://thumbs.dreamstime.com/b/finger-press-book-now-button-booking-reservation-icon-online-149789867.jpg"
              width="50%"
              height="20%"
            />
          </div>
          <div className="mt-5 p-3 ">
            <h5>Specialization : {doctors.specialization}</h5>
            <h5>Email : {doctors.email}</h5>
            <h5>Phone : {doctors.phone}</h5>
            <h5>
              Timings : {doctors.timings && doctors.timings[0]} -{" "}
              {doctors.timings && doctors.timings[1]}{" "}
            </h5>

            <div className="d-flex flex-column ">
              <DatePicker
                aria-required={"true"}
                className="my-2"
                style={{ width: "100%" }}
                format="DD-MM-YYYY"
                onChange={(value) => {
                  setDate(dayjs(value).format("DD-MM-YYYY"));
                  setIsAvailable(false);
                }}
                size="large"
              />
              <TimePicker
                aria-required={"true"}
                format="HH:mm"
                className="mb-2"
                style={{ width: "100%" }}
                onChange={(value) => {
                  setTime(dayjs(value).format("HH:mm"));
                  setIsAvailable(false);
                }}
                size="large"
              />

              {!isAvailable && <button
                className="btn btn-primary mt-2"
                onClick={handleAvailability}
              >
                Check Availability
              </button>}

              {isAvailable && <button className="btn btn-dark mt-2" onClick={handleBooking}>
                Book Now
              </button>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookAppointment;
