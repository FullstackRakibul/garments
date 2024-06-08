import React from "react";
import { Row, Col } from "antd";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class FooterComponent extends React.Component {
  render() {
    return (
      <Fragment>
        <Row className="the-footer-row">
          <Col span={24}>
            <Row>
              <Col span={24} className="footer-text">
                <h1>Explore Garments Ltd.</h1>
              </Col>
            </Row>
            <Row className="footer-info-row">
              <Col span={3} className="footer-link-one">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Group</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/">Link One</Link>
                    <Link to="/">Link Two</Link>
                    <Link to="/">Link Thre</Link>
                    <Link to="/">Link Four</Link>
                    <Link to="/">Link Five</Link>
                  </Col>
                </Row>
              </Col>
              <Col span={3} className="footer-link-two">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Brands</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/">Link One</Link>
                    <Link to="/">Link Two</Link>
                    <Link to="/">Link Thre</Link>
                    <Link to="/">Link Four</Link>
                    <Link to="/">Link Five</Link>
                  </Col>
                </Row>
              </Col>
              <Col span={3} className="footer-link-three">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Sustainability</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/">Link One</Link>
                    <Link to="/">Link Two</Link>
                    <Link to="/">Link Thre</Link>
                    <Link to="/">Link Four</Link>
                    <Link to="/">Link Five</Link>
                  </Col>
                </Row>
              </Col>
              <Col span={3} className="footer-link-two">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Industries</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/apparel">Apparel</Link>
                    <Link to="/laundry">Laundry</Link>
                    <Link to="/fabricmill">Fabric Mill</Link>
                    <Link to="/trimaccessories">Trims & Accessories Unit</Link>
                    <Link to="/embroidery">Embroidry Unit</Link>
                    <Link to="/printingunit">Printing Unit</Link>
                    <Link to="/transportation">Transportation Unit</Link>
                    <Link to="/">C & F</Link>
                    <Link to="/printmedia">Print Media</Link>
                    <Link to="/electronicsmedia">Electronics Media</Link>
                    <Link to="/teastate">Tea State</Link>
                  </Col>
                </Row>
              </Col>
              <Col span={3} className="footer-link-two">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Talent</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/">Link One</Link>
                    <Link to="/">Link Two</Link>
                    <Link to="/">Link Thre</Link>
                    <Link to="/">Link Four</Link>
                    <Link to="/">Link Five</Link>
                  </Col>
                </Row>
              </Col>
              <Col span={3} className="footer-link-two">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Press</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/">Link One</Link>
                    <Link to="/">Link Two</Link>
                    <Link to="/">Link Thre</Link>
                    <Link to="/">Link Four</Link>
                    <Link to="/">Link Five</Link>
                  </Col>
                </Row>
              </Col>
              <Col span={3} className="footer-link-two">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Info</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/">Link One</Link>
                    <Link to="/">Link Two</Link>
                    <Link to="/">Link Thre</Link>
                    <Link to="/">Link Four</Link>
                    <Link to="/">Link Five</Link>
                  </Col>
                </Row>
              </Col>
              <Col span={3} className="footer-link-two">
                <Row>
                  <Col span={24}>
                    <h3 className="footer-title">Others</h3>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{
                      display: "block",
                    }}
                  >
                    <Link to="/">Link One</Link>
                    <Link to="/">Link Two</Link>
                    <Link to="/">Link Thre</Link>
                    <Link to="/">Link Four</Link>
                    <Link to="/">Link Five</Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default FooterComponent;
