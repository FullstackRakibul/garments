import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { Player, ControlBar, PlayToggle, ForwardControl } from "video-react";
import Video from "../../assets/video/video.mp4";

import "./index.css";
import "video-react/dist/video-react.css";

class HeroBackground extends React.Component {
  render() {
    return (
      <Fragment>
        <Row>
          <Col span={24} className="hero-bg-col">
            <video autoPlay muted loop id="myVideo">
              <source src={Video} type="video/mp4" />
            </video>
            {/* <Player
                        autoPlay={true}
                        fluid={false}
        
                        aspectRatio={`4:3`}
                        height={"100%"}
                        width={"100%"}
                        videoWidth={"100%"}
                        videoHeight={"100%"}
                        src={Video33}
                        >
                        <ControlBar 
                        autoHide={true}
                        autoHideTime={3}
                        disableDefaultControls={true}
                        >
                            <ForwardControl seconds={5} order={3.1} />
                            <ForwardControl seconds={10} order={3.2} />
                            <ForwardControl seconds={30} order={3.3} />
                            <PlayToggle />
                        </ControlBar>
                        </Player> */}
          </Col>
        </Row>
      </Fragment>
    );
  }
}
export default HeroBackground;
