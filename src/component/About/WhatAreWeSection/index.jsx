import React from "react";
import { Button, Row, Col, Card } from "antd";
import aboutSectionImage from "../../../assets/images/media/about-section-01.jpg";
import ownerSignature from "../../../assets/images/media/sig.png";

const WhatAreWeSection = () => {
  return (
    <>
      <div className="container mx-auto my-8 p-4">
        <Row gutter={12}>
          <Col span={24}>
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={aboutSectionImage}
                  alt="About Us"
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <h3 className="text-4xl font-bold mb-4">
                  Explore Garments Ltd.
                </h3>
                <p className="text-lg mb-4 font-sans text-justify ">
                  Explore Garments Ltd. (EGL) is a Bangladeshi clothing
                  manufacturer and a leading supplier of readymade garments and
                  denim fabric in the world. We are one of the top clothing
                  companies in Bangladesh, producing some of the most
                  fashionable denim fabrics and garment products. Our
                  comprehensive and resourceful manufacturing facilities are
                  among the best in the industry, ensuring high-quality and
                  innovative products for our clients globally.
                </p>
                <p className="text-lg mb-4 font-sans text-justify">
                  At EGL, we are committed to sustainability, quality, and
                  customer satisfaction. Our team of skilled professionals works
                  tirelessly to deliver products that not only meet but exceed
                  the expectations of our valued customers.
                </p>
                <div className="mt-8">
                  <p className="text-xl font-semibold font-sans">John Doe</p>
                  <p className="text-sm text-gray-600 font-sans">
                    Founder & Director
                  </p>
                  <img
                    src={ownerSignature}
                    alt="John Doe's Signature"
                    className="w-32 mt-4"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WhatAreWeSection;
