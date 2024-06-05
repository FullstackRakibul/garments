import React,{Fragment} from 'react'
import {Row,Col} from 'antd'
import ImageOne from '../../assets/images/9.jpg'
import ImageTwo from '../../assets/images/10.jpg'
import ImageThree from '../../assets/images/11.jpg'
import ImageFour from '../../assets/images/12.jpg'
import SA1 from '../../assets/images/sustainability/sf1.jpg'
import SA2 from '../../assets/images/sustainability/sf2.jpg'
import SA3 from '../../assets/images/sustainability/sf3.jpg'
import './index.css'

class SustainablityQuote extends React.Component{
    render(){
        return(
            <Fragment>
                <Row
                className="sustainabilty-main-row"
                >
                    <Col
                    className="sustainability-main-col"
                    span={24}
                    >
                        <Row
                        className="quote-row"
                        >
                            <Col span={24}>
                                <h2>
                                Ha-Meem  started with the ambition to make fashionable, quality and life-enhancing clothes for people. 
                                See how we’re working to bring beautiful, consciously-crafted fashion to everyone, everywhere.
                                </h2>
                            </Col>
                        </Row>
                        <Row
                        className="gallery-row"
                        >
                            <Col
                            span={24}
                            className="gallery-col"
                            >
                                <Row>
                                    <Col
                                    span={8}
                                    >
                                        <img src={SA1}/>
                                    </Col>
                                    <Col
                                    span={8}
                                    >
                                        <img src={SA2}/>
                                    </Col>
                                    <Col
                                    span={8}
                                    >
                                        <img src={SA3}/>
                                    </Col>
                                    {/* <Col
                                    span={6}
                                    >
                                        <img src={ImageFour}/>
                                    </Col> */}
                                </Row>
                            </Col>
                        </Row>
                        <Row
                        className='explore-sustainability'
                        >
                            <div class="box-1">
                                <div class="btn btn-one">
                                    <span>Explore Our Commitments</span>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row
                className=""
                >

                </Row>
            </Fragment>
        )
    }
}
export default SustainablityQuote