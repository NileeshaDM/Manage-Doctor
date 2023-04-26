import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import dayjs from "dayjs";


function AppointmentList() {
  const [appointment, setAppointment] = useState();


  //to fetch doctor data
  const getAppointmentData = async () => {
    try {

      const response = await axios.get("/api/doctor/getAppointmentsByUserId", {
        // headers: {
        //   Authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      });

      if (response.data.success) {
        setAppointment(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointmentData();
  }, []);

  // antD table col
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Doctor",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.doctorInfo.name}
        </span>
      ),
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
  ];
  return (
    <div>
      <h1 className="page-header">Appointments</h1>
      <Table columns={columns} dataSource={appointment} />
    </div>
  );
}

export default AppointmentList;
