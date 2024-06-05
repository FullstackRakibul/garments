import React,{Fragment} from 'react'
import {Row,Col} from  'antd'
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import {
    DollarOutlined
}from '@ant-design/icons'
import './index.css'

class OverviewCountup extends React.Component{
    render(){
        return(
            <Fragment>
                <Row
                className="overview-countup-row"
                >
                    <div
                    // span={6}
                    className="overview-countup-col"
                    >
                        <h2 className="countNumber">
                            <CountUp
                            // decimals={4}
                            start={0} 
                            end={75000}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <p>
                                                <span ref={countUpRef}/>
                                            </p>
                                        </VisibilitySensor>
                                    )}
                            </CountUp>
                            
                        </h2>
                        <h4 className="countTitle">Total Workforce</h4>
                    </div>
                    <div
                    // span={6}
                    className="overview-countup-col"
                    >
                        <h2 className="countNumber">
                            <CountUp start={0} end={450}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <p>
                                                <span ref={countUpRef}/>
                                            </p>
                                        </VisibilitySensor>
                                    )}
                            </CountUp>
                            
                        </h2>
                        <h4 className="countTitle">Production Line</h4>
                    </div>
                    <div
                    // span={6}
                    className="overview-countup-col"
                    >
                        <h2 className="countNumber">
                            <CountUp start={0} end={11}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <p>
                                                <span ref={countUpRef}/>
                                            </p>
                                        </VisibilitySensor>
                                    )}
                            </CountUp>
                            
                        </h2>
                        <h4 className="countTitle">Mega Factory</h4>
                    </div>
                    <div
            
                    className="overview-countup-col"
                    >
                        <h2 className="countNumber">
                            <CountUp start={0} end={775}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <p>
                                                {/* <DollarOutlined /> */}
                                                {'USD '}<span ref={countUpRef}/>{' M'}
                                            </p>
                                        </VisibilitySensor>
                                    )}
                            </CountUp>
                            
                        </h2>
                        <h4 className="countTitle">Annual Turnover</h4>
                    </div>
                    <div
            
                    className="overview-countup-col"
                    >
                        <h2 className="countNumber">
                            <CountUp start={0} end={8}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <p>
                                                {/* <DollarOutlined /> */}
                                                <span ref={countUpRef}/>{' M'}
                                            </p>
                                        </VisibilitySensor>
                                    )}
                            </CountUp>
                            
                        </h2>
                        <h4 className="countTitle">Production Capacity (Month)</h4>
                    </div>
                </Row>
            </Fragment>
        )
    }
}
export default OverviewCountup