import { React } from "react";
import { Form, Input, Button } from "antd";
import ContactMap from "../ContactMap";
import {
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;

const ContactForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="p-6 flex items-center justify-center">
        <div className="max-w-6xl w-full rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div>
            <h2 className="text-xl font-bold text-primary font-primary">
              Contact Us
            </h2>
            <h3 className="text-5xl font-primary font-bold mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-6 font-primary text-justify">
              Phasellus ultricies ex vitae neque placerat porta. Aenean libero
              eros ultricies vel tristique non, porta eget dolor. Donec vel
              ipsum imperdietum.
            </p>
            <Form
              form={form}
              name="contact"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="space-y-4"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  placeholder="Full Name"
                  className="p-2 border rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "The input is not valid E-mail!" },
                ]}
              >
                <Input
                  placeholder="Email Address"
                  className="p-2 border rounded-md"
                />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[
                  { required: true, message: "Please input your message!" },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Input Message Here"
                  className="p-2 border rounded-md"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-primary hover:bg-purple-600 text-white py-2"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 gap-5 ">
              <PhoneOutlined className="text-primary text-3xl" />
              <div>
                <p className="text-lg font-primary font-semibold leading-none">
                  Phone
                </p>
                <p className="text-gray-600 leading-none">+123-234-1234</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 gap-5 ">
              <MailOutlined className="text-primary text-2xl" />
              <div>
                <p className="text-lg font-semibold font-primary">Email</p>
                <p className="text-gray-600 leading-none">
                  hello@awesomesite.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 gap-5">
              <GlobalOutlined className="text-primary text-2xl" />
              <div>
                <p className="text-lg font-semibold font-primary">Website</p>
                <p className="text-gray-600 leading-none">
                  www.awesomesite.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 gap-5">
              <HomeOutlined className="text-primary text-2xl" />
              <div>
                <p className="text-lg font-semibold font-primary">Address</p>
                <p className="text-gray-600 leading-none">
                  99 Roving St., Big City, PKU 2345
                </p>
              </div>
            </div>
            {/* <div className="relative h-64 rounded-lg overflow-hidden">
              <ContactMap />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
