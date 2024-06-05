import React, { Fragment } from 'react'
import {Row,Col} from 'antd'
import './index.css'

class PageHeroBg extends React.Component{
    render(){
        return(
            <Fragment>
                <Row
                className="hero-bg-row"
                >
                    <Col
                    span={24}
                    style={{
                        textAlign:"center"
                    }}
                    >
                        <h2>{this.props.bgTitle}</h2>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}
export default PageHeroBg;