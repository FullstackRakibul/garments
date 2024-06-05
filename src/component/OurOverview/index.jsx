import React,{Fragment} from 'react'
import {Row,Col} from 'antd'
import './index.css'

class OurOverview extends React.Component{
    render(){
        return(
            <Fragment>
                <Row
                className="our-overview-row"
                >
                    <Col
                    span={24}
                    className="our-overview-col"
                    >
                       <h2>
                            Fashion is so important. It enhances life, delights and inspires to move forward,
                            our merchandisers and designers have unending possibilities that lay the foundation
                            for positive impact.
                        </h2>
                        <div class="box-1">
                            <div class="btn btn-one">
                                <span>Meet With Our Customer</span>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default OurOverview;