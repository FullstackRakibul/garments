import React,{Fragment} from 'react'
import {Row,Col,Button,Badge} from 'antd'
import {
    PlusOutlined
} from '@ant-design/icons'
import Carousel from "react-multi-carousel";
import One from '../../assets/images/products/1.jpg'
import Two from '../../assets/images/products/2.jpg'
import Three from '../../assets/images/products/3.jpg'
import Four from '../../assets/images/products/4.jpg'
import Five from '../../assets/images/products/5.jpg'
import Six from '../../assets/images/products/6.jpg'
import Seven from '../../assets/images/products/7.jpg'
import Eight from '../../assets/images/products/8.jpg'
import Nine from '../../assets/images/products/jacket05.png'
import Ten from '../../assets/images/products/Laser02.png'
import './index.css'
import Slider from "react-slick";


// class OurServices extends React.Component{
//     render(){
//         const responsive = {
//             superLargeDesktop: {
//               // the naming can be any, depends on you.
//               breakpoint: { max: 4000, min: 3000 },
//               items: 5
//             },
//             desktop: {
//               breakpoint: { max: 3000, min: 1024 },
//               items: 5
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
//                 className="our-services-row"
//                 >
//                     <Col
//                     span={24}
//                     className="our-services-col"
//                     >
//                         <Carousel
//                         arrows={false}
//                         // autoPlay
//                         // autoPlaySpeed={3000} 
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
// export default OurServices;

export default class Responsive extends React.Component {
    constructor(){
        super()
        this.state={
            enterKey:''
        }
    }
    handleMouseEnter=(i)=>{
        this.setState({
            enterKey:i
        })
    }
    hanleMouseLeave=(i)=>{
        this.setState({
            enterKey:''
        })
    }
    render() {
        let {enterKey}=this.state
        let settings = {
            dots: false,
            infinite: true,
            //speed: 500,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 4000,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        };

        return (
            <Fragment>
                <Row
                className="our-services-row"
                >
                    <Col
                    className="our-services-col"
                    span={24}
                    >
                        <Slider {...settings}>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,0)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,0)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Six}
                                        className={enterKey===0?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>vertical capability</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,1)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,1)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={One}
                                        className={enterKey===1?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>in house accessories</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,2)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,2)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Three}
                                        className={enterKey===2?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>in house laboratory</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,3)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,3)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Two}
                                        className={enterKey===3?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>in house design</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,4)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,4)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Five}
                                        className={enterKey===4?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>self inspection</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,5)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,5)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Seven}
                                        className={enterKey===5?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>technology & automation</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,6)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,6)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Four}
                                        className={enterKey===6?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>in house laundry</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                            className='carousel-main'
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,7)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,7)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Eight}
                                        className={enterKey===7?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>3D design</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <Badge.Ribbon
                            text="Ha-Meem"
                            color="pink"
                            placement="start"
                            style={{
                                width:"5% !important"
                            }}
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,7)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,7)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Eight}
                                        className={enterKey===7?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>in house accessories</h3>
                                        </div>
                                    </div>
                                </div>
                            </Badge.Ribbon>
                            <Badge.Ribbon
                            text="Ha-Meem"
                            color="pink"
                            placement="start"
                            style={{
                                width:"5% !important"
                            }}
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,8)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,8)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Nine}
                                        className={enterKey===8?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>in house accessories</h3>
                                        </div>
                                    </div>
                                </div>
                            </Badge.Ribbon>
                            <Badge.Ribbon
                            text="Ha-Meem"
                            color="pink"
                            placement="start"
                            style={{
                                width:"5% !important"
                            }}
                            >
                                <div
                                className="carousel-div"
                                onMouseEnter={this.handleMouseEnter.bind(this,9)}
                                onMouseLeave={this.hanleMouseLeave.bind(this,9)}
                                >
                                    <div
                                    style={{
                                        height:"88%",
                                        overflow:"hidden"
                                    }}
                                    className="product-image"
                                    >
                                        <img 
                                        src={Ten}
                                        className={enterKey===9?"overly-image":""}
                                        />
                                        <div class="middle">
                                            <span className='text'>
                                                <Button
                                                size='small'
                                                className="product-btn"
                                                >
                                                    <PlusOutlined />
                                                </Button>
                                            </span>
                                        </div>
                                    </div>
                                    <div
                                     style={{
                                        height:"12%",
                                        width:"100%"
                                    }}
                                    className="product-desc"
                                    >
                                        <div
                                        style={{
                                            width:"80%",
                                            marginLeft:"10%",
                                            textAlign:"center"
                                        }}
                                        >
                                            <h3>in house accessories</h3>
                                        </div>
                                    </div>
                                </div>
                            </Badge.Ribbon> */}
                        </Slider>
                    </Col>
                </Row>
            </Fragment>
        );
    }
}