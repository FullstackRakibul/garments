import React, { Fragment } from 'react'
import {Row,Col} from 'antd'

const NotFound=(props)=>{
    return(
        <Fragment>
            <Row>
                <Col
                span={24}
                >
                    <h2>Content Not Found.</h2>
                </Col>
            </Row>
        </Fragment>
    )
}
export default NotFound;