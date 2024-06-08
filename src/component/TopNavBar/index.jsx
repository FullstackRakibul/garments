import React, { Fragment } from "react";
import { Row, Col, Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/egl-logo.png";
import { useLocation } from "react-router-dom";
const SubMenu = Menu.SubMenu;

const TopNavBar = (props) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Fragment>
      <title>Ha-Meem - {props.title}</title>
      <Row
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Col span={4}>
          <img
            style={{
              height: "100%",
              width: "120px",
            }}
            src={Logo}
          />
        </Col>
        <Col
          span={20}
          style={{
            padding: "0px",
          }}
        >
          <Menu
            // theme='light'
            style={{
              margin: "0px",
              height: "60px",
            }}
            mode="horizontal"
          >
            {/* <SubMenu
                        title={
                        <strong>
                            HOME
                        </strong>
                        }
                        >
                            <Menu.Item>
                                <Link to='/'>
                                    Home-01
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/home1'>
                                    Home-02
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/home1'>
                                    Home-03
                                </Link>
                            </Menu.Item>
                        </SubMenu> */}
            <Menu.Item className="menu-no-child">
              <Link to="/">
                <strong>Home</strong>
              </Link>
            </Menu.Item>
            <Menu.Item className="menu-no-child">
              <Link to="/about">
                <strong>About Us</strong>
              </Link>
            </Menu.Item>
            {/* <SubMenu
                        title={
                        <strong>
                            PAGES
                        </strong>
                        }
                        >
                            <Menu.Item>
                                <Link to='/'>
                                    About Us
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    Services
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    Our Team
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    Team Details
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    Our Team
                                </Link>
                            </Menu.Item>
                        </SubMenu> */}
            <SubMenu title={<strong>industries</strong>}>
              <Menu.Item className="child-menu-item">
                <Link to="/apparel">Apparel</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/laundry">Laundry</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/fabricmill">Fabric Mill</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/trimaccessories">Trims & Accessories Unit</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/embroidery">Embroidery Unit</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/printingunit">Printing Unit</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/transportation">Transportation Unit</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/">C & F</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/printmedia">Print Media</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/electronicsmedia">Electronics Media</Link>
              </Menu.Item>
              <Menu.Item className="child-menu-item">
                <Link to="/teastate">Tea State</Link>
              </Menu.Item>
            </SubMenu>
            {/* <SubMenu
                        title={
                        <strong>
                            PROJECTS
                        </strong>
                        }
                        >
                            <Menu.Item>
                                <Link to='/'>
                                    2 - Columns - Modern
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    3 - Columns - Standard
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    4 - Columns - Full Standard
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    4 - Columns - Full Grid
                                </Link>
                            </Menu.Item>
                        </SubMenu> */}
            {/* <SubMenu
                        title={
                        <strong>
                            BLOG
                        </strong>
                        }
                        >
                            <Menu.Item>
                                <Link to='/'>
                                    Blog Classic
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    Blog Details
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to='/'>
                                    Blog - Right - Sidebar
                                </Link>
                            </Menu.Item>
                        </SubMenu> */}
            <Menu.Item className="menu-no-child">
              <Link to="/sustainability">
                <strong>sustainability</strong>
              </Link>
            </Menu.Item>
            <Menu.Item className="menu-no-child">
              <Link to="/contact">
                <strong>CONTACT</strong>
              </Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Fragment>
  );
};
export default TopNavBar;
