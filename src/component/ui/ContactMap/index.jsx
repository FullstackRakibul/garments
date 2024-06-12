import {React } from 'react'
import {Col, Row,Form} from "antd";


const mapStyle = {
    width:"100%" ,height:"450px" ,frameBorder:"0" ,scrolling:"no" ,marginHeight:"0" ,marginWidth:"0"
}



const ContactMap = () => {
    return (<>
            <section>
                <Row>
                    <Col span={10}>
                        <div>
                            <p>Contact Us</p>
                            <h3>Get In Touch</h3>
                        </div>
                        <div>
                {/*            <Form*/}
                {/*                name="basic"*/}
                {/*                labelCol={{ span: 8 }}*/}
                {/*                wrapperCol={{ span: 16 }}*/}
                {/*                style={{ maxWidth: 600 }}*/}
                {/*                initialValues={{ remember: true }}*/}
                {/*                onFinish={onFinish}*/}
                {/*                onFinishFailed={onFinishFailed}*/}
                {/*                autoComplete="off"*/}
                {/*            >*/}
                {/*                <Form.Item<FieldType>*/}
                {/*                    label="Username"*/}
                {/*                    name="username"*/}
                {/*                    rules={[{ required: true, message: 'Please input your username!' }]}*/}
                {/*                    >*/}
                {/*                    <Input />*/}
                {/*            </Form.Item>*/}

                {/*            <Form.Item<FieldType>*/}
                {/*                label="Password"*/}
                {/*                name="password"*/}
                {/*                rules={[{ required: true, message: 'Please input your password!' }]}*/}
                {/*                >*/}
                {/*                <Input.Password />*/}
                {/*        </Form.Item>*/}

                {/*        <Form.Item<FieldType>*/}
                {/*            name="remember"*/}
                {/*            valuePropName="checked"*/}
                {/*            wrapperCol={{ offset: 8, span: 16 }}*/}
                {/*            >*/}
                {/*            <Checkbox>Remember me</Checkbox>*/}
                {/*    </Form.Item>*/}

                {/*    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>*/}
                {/*        <Button type="primary" htmlType="submit">*/}
                {/*            Submit*/}
                {/*        </Button>*/}
                {/*    </Form.Item>*/}
                {/*</Form>*/}
                        </div>
                    </Col>
                    <Col span={10}>

                    </Col>
                </Row>
            </section>
        <section>
                <iframe style={mapStyle}
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=24.095866638019977,%2090.16833957812368+(Explore%20Garments%20Ltd.)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.gps.ie/">gps vehicle tracker</a>
                </iframe>
        </section>
    </>
)
}

export default ContactMap;
