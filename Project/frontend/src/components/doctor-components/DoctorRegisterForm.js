import React from 'react';
import { Form, Input, Row, Col, TimePicker } from 'antd';
import dayjs from 'dayjs';
import "./DoctorForm.css";
// var customParseFormat = require('dayjs/plugin/customParseFormat');
// dayjs.extend(customParseFormat);

function DoctorRegisterForm({ handleRegister, initialValues }) {
  return (
    <div className="card m-3 border shadow rounded">
      <Form
        layout="vertical"
        className="m-3"
        onFinish={handleRegister}
        initialValues={{
          ...initialValues,
          ...(initialValues && {
            timings: [
              dayjs(initialValues?.timings[0], "HH:mm"),
              dayjs(initialValues?.timings[1], "HH:mm"),
            ],
          }),
        }}
      >
        <h4 className="fonts">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Name"
              name="name"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your name" />
            </Form.Item>
          </Col>
          
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your email" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Password"
              name="password"
              type="password"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your password" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Professional Details :</h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Specialization"
              name="specialization"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Designation"
              name="designation"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your specialization" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Experience"
              name="experience"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your experience" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Timings" name="timings" required>
              <TimePicker.RangePicker format="HH:mm" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default DoctorRegisterForm
