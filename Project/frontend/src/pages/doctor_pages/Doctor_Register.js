import React from "react";
import axios from "axios";
import DoctorRegisterForm from "../../components/doctor-components/DoctorRegisterForm";
import { useNavigate } from "react-router-dom";
// import moment from "moment";
import { message } from "antd";
import dayjs from "dayjs";

function Doctor_Register() {
  const navigate = useNavigate();

  const handleRegister = async (values) => {

    try {
      const timings = [
        dayjs(values.timings[0]).format("HH:mm"),
        dayjs(values.timings[1]).format("HH:mm"),
      ];
      // const photo = values.photo;
      const res = await axios.post("/api/doctor/register_doctor", {
        ...values,
        timings: timings,
      });
      console.log(res);
      if (res.data.success) {
        message.success("Login Successful");
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <DoctorRegisterForm handleRegister={handleRegister} />
    </div>
  );
}

export default Doctor_Register;
