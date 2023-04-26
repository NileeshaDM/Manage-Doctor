import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DoctorRegisterForm from "../../components/doctor-components/DoctorRegisterForm";
import dayjs from "dayjs";

function Doctor_Update() {
  // const { user } = useSelector((state) => state.user);
  const params = useParams();
  const {_id} = params;

  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  //handle form
  const handleRegister = async (values) => {
    try {
      const res = await axios.post(
        "/api/doctor/updateDoctorInfo",
        {
          ...values,
          //   userId: user._id,
          doctorId: doctor._id,
          timings: [
            dayjs(values.timings[0]).format("HH:mm"),
            dayjs(values.timings[1]).format("HH:mm"),
          ],
        },
        {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem("token")}`,
          // },
        }
      );
      if (res.data.success) {
        message.success(res.data.success);
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      console.log(error);
      message.error("Somthing Went Wrong ");
    }
  };

  //get Doctor Data
  const getDoctorData = async () => {
    try {
      const res = await axios.get(
        `/api/doctor/getDoctorInfoById/${_id}`,
        {
          //typed in app.js as userId
        
        },
        {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem("token")}`,
          // },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //delete Doctor
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `/api/doctor/deleteDoctorProfile/${id}`
      );

      if(res.status(200)){
        navigate("/");
        message.success("Account Deleted");
      }
    } catch (error) {
      console.log(error);
      message.error("Somthing Went Wrong ");
    }
  }



  useEffect(() => {
    getDoctorData();
  }, []);

  return (
    <div>
      {doctor && (<DoctorRegisterForm
        handleRegister={handleRegister}
        initialValues={doctor}
      />)}
      
      {doctor && (<button className="btn btn-danger form-btn" type="submit" onClick={() => handleDelete(doctor._id)}>
        Delete
      </button>)}

      
    </div>
  );
}

export default Doctor_Update;
