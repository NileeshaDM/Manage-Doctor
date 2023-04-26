import { Link } from "react-router-dom";
import axios from "axios";
import DoctorRegisterForm from "../../components/doctor-components/DoctorRegisterForm";
import { useContext, useEffect, useState } from "react";
import DoctorCard from "../../components/doctor-components/DoctorCard";
import { Col, Row } from "antd";


const Doctor_home = () => {
  const [doctors, setDoctors] = useState([]);

  const getDoctorData = async () => {
    try {
      const res = await axios.get(
        "/api/doctor/getDoctorsForCards"
        // {
        //   // headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        // }
      );

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDoctorData();
  }, []);
  return (
    <div className="home-text-section">
      <p className="primary-text">Doctor management</p>

      <Link to="/">
        <button className="secondary-button"> Home</button>
      </Link>

      <Link to="/Doctor_register">
        <button className="secondary-button green"> Register</button>
      </Link>

      <div>
       
          <Row>
            {doctors.map((doctor) => (
              <Col span={8} xs={24} sm={24} lg={8}>
           
                <DoctorCard doctor={doctor} />
                
              </Col>
            ))}
          </Row>
      
      </div>

      <br />
    </div>
  );
};

export default Doctor_home;
