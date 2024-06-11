import React from "react";
import { Row, Col, Carousel } from "antd";
import "./index.less";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "#364d79",
};

const OurClient = () => {
  return (
    <>
      <section className="bg-black p-16 ">
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
                src="https://via.placeholder.com/150"
                alt="Slide 1"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 2"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 3"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 4"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 5"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 6"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 7"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 8"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 9"
                className="carousel-image"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/150"
                alt="Slide 10"
                className="carousel-image"
              />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default OurClient;
