import { Layout, Menu} from 'antd';
import React from "react";

const { Header, Content, Footer } = Layout;

    const Customlayout = (props) => {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">Events</Menu.Item>
                        <Menu.Item key="2">Gastsprekers</Menu.Item>
                        <Menu.Item key="3">Placeholder</Menu.Item>
                    </Menu>
                </Header>
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                        {props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>

        )

    }

    export default Customlayout;