import React from "react";
import { useNavigate } from "react-router-dom";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();
  return (
    
    <div
      className="card m-3 border shadow rounded"
      style={{ cursor: "pointer", width: "18rem" }}
      onClick={() => navigate(`/bookAppointment/${doctor._id}`)}
    >
      <h5 className="card-header p-2 text-center">
        {doctor.name}
      </h5>
      {/* <img
        src="..."
        className="card-img-top"
        alt="docProfile"
      ></img> */}
      <div className="card-body">
        <p>
          <b>Designation: </b> {doctor.designation}
        </p>
        <p>
          <b>Phone Number: </b> {doctor.phone}
        </p>
        <p>
          <b>Timings: </b> {doctor.timings[0]} - {doctor.timings[1]}
        </p>
      </div>
    </div>
  );
}

export default DoctorCard;
