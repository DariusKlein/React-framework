import { Col, Layout, Menu, Row} from 'antd';
import React from "react";
import { Button } from 'antd';
import AdminView from "./AdminView";
import { UserOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

    const Customlayout3 = (props) => {
        return (

                <Layout>

                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
                            <Menu.Item onClick={() => window.location.href = '/landing'} key="1">Home</Menu.Item>
                            <Menu.Item onClick={() => window.location.href = '/Events'} key="2">Events</Menu.Item>
                            <Menu.Item onClick={() => window.location.href = '/Events'} key="3">Gastsprekers</Menu.Item>
                            <Menu.Item onClick={() => window.location.href = '/Admin'} key="4">Admin</Menu.Item>
                            <Button style={{"float": "right", marginTop: 18}} href="Login" type="primary" shape="circle" icon={<UserOutlined />} />

                        </Menu>
                    </Header>

                    <Content className="site-layout" style={{ padding: '0 0px', marginTop: 50 }}>
                        <div className="site-layout-background" style={{ padding: 0 }}>
                            <Row>
                                <Col span={24}> <h1 className="Title" style={{fontSize:40}}>Event Admin pannel</h1></Col>

                            </Row>
                            <Row>
                                <Col span={24}>
                                    <AdminView/>

                                </Col>

                            </Row>


                        </div>
                    </Content>
            </Layout>


        )

    }

    export { Customlayout3}