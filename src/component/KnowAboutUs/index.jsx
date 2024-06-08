import React, { Fragment } from "react";
import { Row, Col } from "antd";
import "./index.css";

class KnowAboutUs extends React.Component {
  render() {
    return (
      <Fragment>
        <Row className="know-about-us-row">
          <Col span={24} className="know-about-us-col">
            <h2>
              Explore Garments Ltd. started with a passion, an ambition to
              create quality and creative clothing for people. See how we work
              to bring our creative apparel to everyone, everywhere.
            </h2>
            <div class="box-1">
              <div class="btn btn-one">
                <span>Meet Our Strength</span>
              </div>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default KnowAboutUs;
