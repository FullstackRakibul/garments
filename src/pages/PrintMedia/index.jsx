import React, { Fragment } from 'react'
import { Breadcrumb, Layout, Menu,FloatButton} from 'antd';
import TopNavBar from '../../component/TopNavBar';
import PageHeroBg from '../../component/HeroBg';
import FooterComponent from '../../component/Footer';
const { Header, Content, Footer } = Layout;

class PrintMediaUnitPages extends React.Component{
    render(){
        return(
            <Fragment>
                <Layout>
                    <Header
                    style={{
                        position:"fixed",
                        top: 0,
                        overflow:"auto",
                        zIndex:1500,
                        width: '100%',
                        borderBottom:"1px solid grey"
                      }}
                    >
                        <TopNavBar title="Print Media"/>
                    </Header>
                    <Content>
                        <PageHeroBg bgTitle="Print Media"/>
                    </Content>
                    <Footer
                    style={{
                        textAlign:"center"
                    }}
                    >
                        <FloatButton.BackTop
                        duration="1000"
                        />
                        <FooterComponent/>
                        <span>
                            Copyright © Ha-Meem Group All Right Reserved.
                        </span>
                    </Footer>
                </Layout>
            </Fragment>
        )
    }
}
export default PrintMediaUnitPages;