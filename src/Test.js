import React, { Fragment } from 'react'
import {Row,Col} from 'antd'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class TestSlide extends React.Component{
    constructor(){
        super()
        this.state={
            testClass:false
        }
    }
    handleClass=()=>{
        this.setState({
            testClass:!this.state.testClass
        })
    }
    leaveClass=()=>{
        this.setState({
            testClass:!this.state.testClass
        })
    }
    render(){
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 5
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
        };

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 2,
            speed: 500,
            //height:"300px"
          };
        return(
            <Fragment>
                <Row>
                    <Col span={6}>
                    </Col>
                    <Col 
                    span={12}
                    style={{
                        marginTop:"100px",
                        padding:"15px",
                        overflow:"hidden",
                        borderTop:"1px solid grey"
                    }}
                    >
                        {/* <Carousel
                        arrows={false}
                        autoPlay
                        autoPlaySpeed={3000} 
                        additionalTransfrom={0}
                        //arrows
                        //autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}

                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        //shouldResetAutoplay
                        showDots={false}
                        sliderClass="test-class"
                        slidesToSlide={1}
                        swipeable

                        responsive={responsive}
                        //infinite
                        // slidesToSlide={1}
                        >
                            <div
                            style={{
                                height:"120px",
                                width:"120px",
                                background:"grey"
                            }}
                            >
                                Item 1
                            </div>
                            <div
                            style={{
                                height:"120px",
                                width:"120px",
                                background:"grey"
                            }}
                            >
                                Item 2
                            </div>
                            <div
                            style={{
                                height:"120px",
                                width:"120px",
                                background:"grey"
                            }}
                            >
                                Item 3
                            </div>
                            <div
                            style={{
                                height:"120px",
                                width:"120px",
                                background:"grey"
                            }}
                            >
                                Item 4
                            </div>
                            <div
                            style={{
                                height:"120px",
                                width:"120px",
                                background:"grey"
                            }}
                            >
                                Item 5
                            </div>
                            <div
                            style={{
                                height:"120px",
                                width:"120px",
                                background:"grey"
                            }}
                            >
                                Item 6
                            </div>
                        </Carousel> */}
                        <div>
                        <Slider {...settings}>
                            <div
                            >
                                <h3
                              
                                >
                                    1
                                </h3>
                            </div>
                            <div
                            >
                                <h3
                               
                                >2</h3>
                            </div>
                            <div
                            >
                                <h3
                               
                                >3</h3>
                            </div>
                            <div
                            
                            >
                                <h3>4</h3>
                            </div>
                            <div
                           
                            >
                                <h3>5</h3>
                            </div>
                            <div
                            
                            >
                                <h3>6</h3>
                            </div>
                        </Slider>
                        </div>
                    
                        <div
                        onMouseEnter={this.handleClass}
                        onMouseLeave={this.leaveClass}
                        style={{
                            height:"200px",
                            marginTop:"10px",
                            width:"100%",
                            background:"grey",
                            padding:"10px"
                        }}
                        >
                            <div
                            // style={{
                            //     margin:"10px",
                            //     width:"200px",
                            //     height:"80px",
                            //     background:"red"
                            // }}
                            className={this.state.testClass?"show-class":"hide-class"}
                            >

                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default TestSlide;