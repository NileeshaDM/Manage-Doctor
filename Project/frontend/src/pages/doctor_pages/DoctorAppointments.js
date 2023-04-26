import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Table, message } from "antd";
import dayjs from "dayjs";
import { Store } from "../../components/Online-shopping-components/Store";

function DoctorAppointments() {
  const [appointments, setAppointments] = useState([]);
  const {state , dispatch : ctxDispatch} = useContext(Store);
    const {userInfo } = state
  //to fetch doctor data
  const getAppointmentsData = async () => {
    try {
      const response = await axios.get(
        `/api/doctor/getAppointmentsByDoctorId/${ userInfo._id }`,
        {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem("token")}`,
          // },
        }
      );

      if (response.data.success) {
        setAppointments(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //to change status to doctor
  const changeAppointmentStatus = async (record, status) => {
    try {
      const response = await axios.post(
        "/api/doctor/changeAppointmentStatus",
        { appointmentId: record._id, status: status },
        {
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem("token")}`,
          // },
        }
      );
      if (response.data.success) {
        message.success(response.data.message);
        getAppointmentsData();
      }
    } catch (error) {
      message.error("Error changing status to Doctor");
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointmentsData();
  }, []);

  // antD table col
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Patient",
      dataIndex: "name",
      render: (text, record) => <span>{record.userDes.name}</span>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (text, record) => <span>{record.doctorInfo.phone}</span>,
    },
    {
      title: "Date & Time",
      dataIndex: "date",
      render: (text, record) => (
        <span>
          {dayjs(record.date).format("DD-MM-YYYY")}{" "}
          {dayjs(record.time).format("HH:mm")}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" && (
            <div className="d-flex">
              <button
                className="btn btn-success mx-2"
                onClick={() => changeAppointmentStatus(record, "approve")}
              >
                Approve
              </button>

              <button
                className="btn btn-danger"
                onClick={() => changeAppointmentStatus(record, "reject")}
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ),
    },
  ];
  return (
    <div>
      <h1 className="page-header">Appointments</h1>
      <Table columns={columns} dataSource={appointments} />
    </div>
  );
}

export default DoctorAppointments;
