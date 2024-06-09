import React from "react";
import { Carousel, Image } from "antd";

import Slider01 from "../../assets/images/slider/slider01.jpg";
import Slider02 from "../../assets/images/slider/slider02.jpg";
import Slider03 from "../../assets/images/slider/slider03.jpg";
import Slider04 from "../../assets/images/slider/slider04.jpg";

const contentStyle = {
  margin: 0,
  height: "550px",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
  backgroundSize: "cover",
};

const HeroSectionSlider = () => {
  return (
    <>
      <Carousel
        arrows
        autoplay
        autoplaySpeed={2500}
        infinite="true"
        dotPosition="bottom"
      >
        {/* <div>
          <img
            style={{ ...contentStyle, backgroundSize: "cover" }}
            src={Slider01}
          />
        </div>
        <div>
          <img
            style={{ ...contentStyle, backgroundSize: "cover" }}
            src={Slider02}
          />
        </div>
        <div>
          <img
            style={{ ...contentStyle, backgroundSize: "cover" }}
            src={Slider03}
          />
        </div> */}
        <div>
          <Image
            width="100%"
            //backgroundSize="cover"
            style={contentStyle}
            src={Slider03}
          />
        </div>
        <div>
          <Image
            width="100%"
            //backgroundSize="cover"
            style={contentStyle}
            src={Slider04}
          />
        </div>
      </Carousel>
    </>
  );
};

export default HeroSectionSlider;

// <div>
//   <img
//     style={{ ...contentStyle, backgroundSize: "cover" }}
//     src={Slider04}
//   />
// </div>;
