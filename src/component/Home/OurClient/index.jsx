import React from "react";
import { Row, Col, Carousel } from "antd";
import "./index.less";

import brandImage01 from "../../../assets/images/brands/brands-01.png";
import brandImage02 from "../../../assets/images/brands/brands-02.png";
import brandImage03 from "../../../assets/images/brands/brands-03.png";
import brandImage04 from "../../../assets/images/brands/brands-04.png";
import brandImage05 from "../../../assets/images/brands/brands-05.png";
import brandImage06 from "../../../assets/images/brands/brands-06.png";
import brandImage07 from "../../../assets/images/brands/brands-07.png";
import brandImage08 from "../../../assets/images/brands/brands-08.png";
import brandImage09 from "../../../assets/images/brands/brands-09.png";
import brandImage10 from "../../../assets/images/brands/brands-10.png";

const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
};

const OurClient = () => {
  return (
    <>
      <section className="bg-black p-16 ">
        <div className=" mb-5 flex justify-center ">
          <h3 className="text-4xl font-bold font-sans text-white">
            1,450+ Satisfied Clients Over The Globe
          </h3>
        </div>
        <div className="carousel-container">
          <Carousel
            autoplay
            slidesToShow={5}
            useTransform
            autoplaySpeed={1500}
            infinite
            dots={false}
          >
            <div>
              <img
                src={brandImage01}
                alt="Slide 1"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage02}
                alt="Slide 2"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage03}
                alt="Slide 3"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage04}
                alt="Slide 4"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage05}
                alt="Slide 5"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage06}
                alt="Slide 6"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage07}
                alt="Slide 7"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage08}
                alt="Slide 8"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage09}
                alt="Slide 9"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
            <div>
              <img
                src={brandImage10}
                alt="Slide 10"
                className="carousel-image"
                style={contentStyle}
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default OurClient;
