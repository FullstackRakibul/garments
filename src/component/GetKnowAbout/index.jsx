import React, { Fragment } from "react";
import { Row, Col, Button } from "antd";
import "./index.css";

class GetKnowAbout extends React.Component {
  render() {
    return (
      <Fragment>
        <Row className="get-know-about-row">
          <Col span={24} className="get-know-about-col">
            <h2>
              <strong
                style={{
                  color: "#ff3f31",
                }}
              >
                EGL - Explore Garments Ltd.
              </strong>{" "}
              is a nucleus for 10 thousand workforces (A combination of 48
              thousand families) <br />
              and integrates all emotions, attitudes and challenges in one
              platform.
            </h2>
            <div class="box-1">
              <div class="btn btn-one">
                <span>Meet Our Customers</span>
              </div>
            </div>
            {/* <Button
                        style={{
                            marginTop:"20px"
                        }}
                        >
                            Meet With Us
                        </Button> */}
            {/* <div class="center">
                            <button class="btn">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                </svg>
                                <span>HOVER ME</span>
                            </button>
                        </div> */}
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default GetKnowAbout;
