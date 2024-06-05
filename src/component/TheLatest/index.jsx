import React,{Fragment} from 'react'
import {Row,Col,Card} from 'antd'
import Img1 from '../../assets/images/9.jpg'
import Img2 from '../../assets/images/10.jpg'
import Img3 from '../../assets/images/11.jpg'
import './index.css'
const { Meta } = Card;

class TheLatest extends React.Component{
    render(){
        return(
            <Fragment>
                <Row
                className="the-latest-row"
                >
                    <Col
                    className="the-latest-col"
                    span={24}
                    >
                        <Row>
                            <Col
                            span={24}
                            className="latest-title"
                            >
                                <h2>The Latest</h2>
                            </Col>
                        </Row>
                        <Row
                        className="latest-post"
                        >
                            <Card
                            className='post-card'
                                hoverable
                                style={{
                                width: "29.33%",
                                }}
                                cover={
                                    <img
                                    style={{
                                        height:"40vh"
                                    }}
                                    alt="example" 
                                    src={Img1} />
                                }
                            >
                                <Meta
                                style={{
                                    height:"22vh",
                                    textAlign:"center"
                                }} 
                                title={<span
                                className="card-title"
                                >
                                    <strong>
                                    Europe Street beat
                                    </strong>
                                </span>}
                                description={<Row>
                                    <Col
                                    span={24}
                                    style={{
                                        textAlign:"left"
                                    }}
                                    >
                                        <span
                                        className="card-description"
                                        >
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        </span>
                                    </Col>
                                </Row>}
                                >
                                </Meta>
                            </Card>
                            <Card
                            className='post-card'
                                hoverable
                                style={{
                                width: "29.33%",
                                }}
                                cover={
                                    <img
                                    style={{
                                        height:"40vh"
                                    }}
                                    alt="example" 
                                    src={Img2} />
                                }
                            >
                                <Meta
                                style={{
                                    height:"22vh",
                                    textAlign:"center"
                                }} 
                                title={<span
                                className="card-title"
                                >
                                    <strong>
                                    Europe Street beat
                                    </strong>
                                </span>}
                                description={<Row>
                                    <Col
                                    span={24}
                                    style={{
                                        textAlign:"left"
                                    }}
                                    >
                                        <span
                                        className="card-description"
                                        >
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        </span>
                                    </Col>
                                </Row>}
                                >
                                </Meta>
                            </Card>
                            <Card
                            className='post-card'
                                hoverable
                                style={{
                                width: "29.33%",
                                }}
                                cover={
                                    <img
                                    style={{
                                        height:"40vh"
                                    }}
                                    alt="example" 
                                    src={Img3} />
                                }
                            >
                                <Meta
                                style={{
                                    height:"22vh",
                                    textAlign:"center"
                                }} 
                                title={<span
                                className="card-title"
                                >
                                    <strong>
                                    Europe Street beat
                                    </strong>
                                </span>}
                                description={<Row>
                                    <Col
                                    span={24}
                                    style={{
                                        textAlign:"left"
                                    }}
                                    >
                                        <span
                                        className="card-description"
                                        >
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                        </span>
                                    </Col>
                                </Row>}
                                >
                                </Meta>
                            </Card>
                        </Row>
                        <Row
                        className='explore-sustainability'
                        >
                            <div class="box-1">
                                <div class="btn btn-one">
                                    <span>Show More</span>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default TheLatest;