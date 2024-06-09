import React from "react";
import { Card } from "antd";

import Tailoring from "../../../assets/images/icons/tailoring.png";
import TailorMachine from "../../../assets/images/icons/tailor_machine.png";
import VRicon from "../../../assets/images/icons/VRicon.png";
import Embroidery from "../../../assets/images/icons/Embroidery.png";
import SewingNeedlework from "../../../assets/images/icons/SewingNeedlework.png";

import {
  UserOutlined,
  SettingOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/Icon";

const { Meta } = Card;
const iconStyle = {
  fontSize: "10px",
  color: "#1890ff",
  img: {
    height: "50px",
  },
};
const IconsSectionServiceBox = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/5 p-4">
            <h2 className="text-3xl font-bold mb-4">
              Why Compromise On Style? Garments That Define You
            </h2>
            <p className="text-lg">
              We offer a range of services to meet your needs. Our expertise and
              dedication ensure the best results for your business.
            </p>
          </div>

          <div className="w-full md:w-3/5 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className=" hover:shadow-md ">
              <img
                src={Tailoring}
                alt="User Management"
                style={(iconStyle, iconStyle.img)}
                className="mb-5"
              />
              <Meta title="Custom Tailoring" />
            </Card>
            <Card className=" hover:shadow-md ">
              <img
                src={TailorMachine}
                alt="User Management"
                style={(iconStyle, iconStyle.img)}
                className="mb-5"
              />
              <Meta title="Textile Sourcing" />
            </Card>
            <Card className=" hover:shadow-md ">
              <img
                src={VRicon}
                alt="User Management"
                style={(iconStyle, iconStyle.img)}
                className="mb-5"
              />
              <Meta title="Virtual Fitting Rooms" />
            </Card>
            <Card className=" hover:shadow-md ">
              <img
                src={Embroidery}
                alt="User Management"
                style={(iconStyle, iconStyle.img)}
                className="mb-5"
              />{" "}
              <Meta title="Linen Weaving" />
            </Card>
            <Card className=" hover:shadow-md ">
              <img
                src={SewingNeedlework}
                alt="User Management"
                style={(iconStyle, iconStyle.img)}
                className="mb-5"
              />{" "}
              <Meta title="Garment Stitching" />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default IconsSectionServiceBox;
