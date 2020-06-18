import { Col, Layout, Menu, Row} from 'antd';
import React from "react";
import { Button } from 'antd';
import LoginView from "./LoginView";
import { UserOutlined } from '@ant-design/icons';


const { Header, Content } = Layout;

    const Customlayout2 = (props) => {
        return (

                <Layout>

                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item onClick={() => window.location.href = '/landing'} key="1">Home</Menu.Item>
                            <Menu.Item onClick={() => window.location.href = '/Events'} key="2">Events</Menu.Item>
                            <Menu.Item onClick={() => window.location.href = '/Events'} key="3">Gastsprekers</Menu.Item>
                            <Menu.Item onClick={() => window.location.href = '/Admin'} key="4">Admin</Menu.Item>
                            <Button style={{"float": "right", marginTop: 18}} href="Login" type="primary" shape="circle" icon={<UserOutlined />} />

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