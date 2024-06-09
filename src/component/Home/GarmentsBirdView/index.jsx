import React from "react";
import { Card, Col, Row } from "antd";
import birdViewImage01 from "../../../assets/images/slider/birdsView01.jpg";
const { Meta } = Card;

const contentStyle = {
  margin: 0,
  height: "500px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const GarmentsBirdView = () => {
  return (
    <>
      <div className="container mx-auto my-8">
        <div
          className="relative h-96 bg-cover bg-center"
          style={{
            ...contentStyle,
            backgroundImage: `url(${birdViewImage01})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
          <div className="relative z-10 flex items-center h-full px-8">
            <Row className=" ">
              <Col
                className="bg-transparent"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "none",
                  borderRadius: "7px",
                  padding: "8px",
                }}
                span={10}
              >
                <h3 className="text-5xl text-white font-bold mb-8">
                  Explore Garments Ltd.
                </h3>
                <p className="text-md text-white text-justify ">
                  We are one of the top clothing companies in Bangladesh. The
                  company produces some of the most fashionable denim fabrics
                  and garment products and owns one of the most comprehensive
                  and resourceful manufacturing facilities in Bangladesh.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default GarmentsBirdView;
