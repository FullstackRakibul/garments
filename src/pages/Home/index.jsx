import React, { Fragment } from "react";
import { Breadcrumb, Layout, Menu, FloatButton } from "antd";
import TestSlide from "../../Test";
import TopNavBar from "../../component/TopNavBar";
import HeroBackground from "../../component/VideoBg";
import GetKnowAbout from "../../component/GetKnowAbout";
import OurBrand from "../../component/OurBrand";
import OurOverview from "../../component/OurOverview";
import OverviewCountup from "../../component/OverviewCountup";
import KnowAboutUs from "../../component/KnowAboutUs";
import OurServices from "../../component/OurServices";
import SustainablityQuote from "../../component/SustainablityQuote";
import TheLatest from "../../component/TheLatest";
import FooterComponent from "../../component/Footer";
import HeroSectionSlider from "../../component/HeroSectionSlider";
import GarmentsBirdView from "../../component/Home/GarmentsBirdView";
import IconsSectionServiceBox from "../../component/Home/IconsSectionServiceBox";
import { BranchesOutlined } from "@ant-design/icons";
import OurClient from "../../component/Home/OurClient";
const { Header, Content, Footer } = Layout;

class HomePage extends React.Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <Header
            style={{
              // position: 'sticky',
              position: "fixed",
              top: 0,
              // marginBottom:"60px",
              overflow: "auto",
              zIndex: 1500,
              width: "100%",
              borderBottom: "1px solid grey",
            }}
          >
            <TopNavBar title="Home" />
          </Header>
          <Content>
            {/* <HeroBackground /> */}
            <HeroSectionSlider />
            <IconsSectionServiceBox />
            <GarmentsBirdView />
            <GetKnowAbout />
            <OurClient />
            {/* <OurBrand /> */}

            <OurOverview />
            <OverviewCountup />
            <KnowAboutUs />
            <OurServices />
            <SustainablityQuote />
            <TheLatest />
            {/* <TestSlide /> */}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            <FloatButton.BackTop duration="1000" />
            <FooterComponent />
            <span>Copyright 2024© EGL. All Right Reserved.</span>
          </Footer>
        </Layout>
      </Fragment>
    );
  }
}
export default HomePage;
