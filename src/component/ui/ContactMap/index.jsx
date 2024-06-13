import React from "react";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const ContactMap = () => {
  return (
    <>
      {/* <section className="container mx-auto p-20 ">
        <Row gutter={16} className="flex justify-between items-center">
          <Col span={10} className="flex flex-col p-24 justify-center">
            <div className="mb-4">
              <p className="text-xl font-semibold">Contact Us</p>
              <h3 className="text-5xl font-bold">Get In Touch</h3>
            </div>
            <div className="flex space-x-4">
              <FacebookOutlined className="text-3xl text-blue-600" />
              <TwitterOutlined className="text-3xl text-blue-400" />
              <InstagramOutlined className="text-3xl text-pink-600" />
              <LinkedinOutlined className="text-3xl text-blue-700" />
            </div>
          </Col>
          <Col span={14}>
            <div>
              <Form
                name="basic"
                // labelCol={{ span: 8 }}
                // wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className="p-6 "
              >
                <Form.Item
                  name="mail"
                  rules={[
                    {
                      initialValues: true,
                      required: true,
                      message: "Enter your mail",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      initialValues: true,
                      required: true,
                      message: "Write message",
                    },
                  ]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </section> */}
      <section className="container mx-auto">
        <Row>
          <div>
            <h3 className="text-xl">Find us on Map</h3>
          </div>
          <Col span={24}>
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=24.095866638019977,%2090.16833957812368+(Explore%20Garments%20Ltd.)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-96"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContactMap;
