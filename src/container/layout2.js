import { Col, Divider, Layout, Menu, Row} from 'antd';
import React from "react";
import { Button } from 'antd';
import LoginView from "./LoginView";


const { Header, Content, Footer } = Layout;

    const Customlayout2 = (props) => {
        return (

                <Layout>

                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">Events</Menu.Item>
                            <Menu.Item key="2">Gastsprekers</Menu.Item>
                            <Menu.Item key="3">Placeholder</Menu.Item>
                        </Menu>
                    </Header>

                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <div className="site-layout-background" style={{ padding: 0 }}>
                            <Row>
                                <Col span={24}> <h1 className="Title" style={{fontSize:40}}> Login</h1></Col>

                            </Row>
                            <Row>
                                <Col span={24}>
                                    <LoginView/>

                                </Col>

                            </Row>


                        </div>
                    </Content>
            </Layout>


        )

    }

    export { Customlayout2}