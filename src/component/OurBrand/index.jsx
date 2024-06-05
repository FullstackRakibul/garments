import React,{Fragment} from 'react'
import {Row,Col} from 'antd'
import Carousel from "react-multi-carousel";
import Slider from "react-slick";
import One from '../../assets/images/products/bt1.png'
import Two from '../../assets/images/products/bt2.png'
import Three from '../../assets/images/products/bt3.png'
import Four from '../../assets/images/products/bt4.png'
import Five from '../../assets/images/products/bt5.png'
import Six from '../../assets/images/products/bt6.png'
import Seven from '../../assets/images/products/bt7.png'
import Eight from '../../assets/images/products/jacket05.png'
import Nine from '../../assets/images/products/Laser01.png'
import Ten from '../../assets/images/products/Laser02.png'
import BP1 from '../../assets/images/brand/bpi1.png'
import BP2 from '../../assets/images/brand/bpi2.png'
import BP3 from '../../assets/images/brand/bpi3.png'
import BP4 from '../../assets/images/brand/bpi4.png'
import BP5 from '../../assets/images/brand/bpi5.png'
import BP6 from '../../assets/images/brand/bpi6.png'
import BP7 from '../../assets/images/brand/bpi7.png'
import BP8 from '../../assets/images/brand/bpi8.png'
import './index.css'


// class OurBrand extends React.Component{
//     render(){
//         const responsive = {
//             superLargeDesktop: {
//               // the naming can be any, depends on you.
//               breakpoint: { max: 4000, min: 3000 },
//               items: 5
//             },
//             desktop: {
//               breakpoint: { max: 3000, min: 1024 },
//               items: 8
//             },
//             tablet: {
//               breakpoint: { max: 1024, min: 464 },
//               items: 2
//             },
//             mobile: {
//               breakpoint: { max: 464, min: 0 },
//               items: 1
//             }
//         };
//         return(
//             <Fragment>
//                 <Row
//                 className="our-brand-row"
//                 >
//                     <Col
//                     span={24}
//                     className="our-brand-col"
//                     >
//                         <Carousel
//                         arrows={false}
//                         autoPlay
//                         autoPlaySpeed={3000} 
//                         additionalTransfrom={0}
//                         //arrows
//                         //autoPlaySpeed={3000}
//                         centerMode={false}
//                         className=""
//                         containerClass="container-with-dots"
//                         dotListClass=""
//                         draggable
//                         focusOnSelect={false}
//                         infinite
//                         itemClass=""
//                         keyBoardControl
//                         minimumTouchDrag={80}
//                         pauseOnHover
//                         renderArrowsWhenDisabled={false}
//                         renderButtonGroupOutside={false}
//                         renderDotsOutside={false}

//                         rewind={false}
//                         rewindWithAnimation={false}
//                         rtl={false}
//                         //shouldResetAutoplay
//                         showDots={false}
//                         sliderClass=""
//                         slidesToSlide={1}
//                         swipeable

//                         responsive={responsive}
//                         //infinite
//                         // slidesToSlide={1}
//                         >
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={One}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Two}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Three}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Four}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>   
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Five}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Six}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Seven}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Eight}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
                                
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                     <img src={Nine}/>
//                                     <div class="middle">
//                                         <span className='text'>
//                                             Brand Name
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div
//                             className='carousel-div'
//                             >
//                                 <div
//                                 className="carousel-div-inner"
//                                 >
//                                      <img src={Ten}/>
//                                     <div class="middle">
//                                       <span className='text'>
//                                         Brand Name
//                                       </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Carousel>
//                     </Col>
//                 </Row>
//             </Fragment>
//         )
//     }
// }
// export default OurBrand;

export default class OurBrand extends React.Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 4,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
        <Fragment>
            <Row
            className="our-brand-row"
            >
                <Col
                span={24}
                className="our-brand-col"
                >
                    <Slider {...settings}>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    {/* <img
                                    className="brand-large-img"
                                    src={One}
                                    /> */}
                                    <img
                                    className="brand-large-img"
                                    src={One}
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP1}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div
                                className="carousel-div"
                                >
                                    <div
                                    className='carousel-div-inner'
                                    >
                                    <img 
                                    src={Two}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP2}/>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Three}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                     <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP3}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Four}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP4}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Five}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP5}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Six}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Three}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP6}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Seven}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP8}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Three}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP3}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Four}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP4}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                            className="carousel-div"
                            >
                                <div
                                className='carousel-div-inner'
                                >
                                    <img 
                                    src={Two}
                                    className="brand-large-img"
                                    />
                                    <img
                                    className="brand-large-img"
                                    src={Six}
                                    />
                                    {/* <div class="middle">
                                        <span className='text'>
                                            Brand Name
                                        </span>
                                    </div> */}
                                    <div class="overlay">
                                        <div class="text">
                                            <img 
                                            style={{
                                                height:"100%",
                                                width:"30%",
                                                marginLeft:"35%"
                                            }}
                                            src={BP2}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>    
        </Fragment>
       
      );
    }
  }