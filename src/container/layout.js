import {Col, Divider, Layout, Menu, Row} from 'antd';
import React from "react";
import { Button } from 'antd';

const { Header, Content, Footer } = Layout;

    const Customlayout = (props) => {
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
                            <Col span={24}> <h1 className="Title" style={{fontsize:100}}> Hogeschool Utrecht Events en Gastsprekers</h1></Col>

                        </Row>
                        <Divider/>
                        <Row>
                            <Col span={8}> <Button type="primary">Open ICT</Button></Col>
                            <Col span={8}> <Button type="primary">ICT</Button> </Col>
                            <Col span={8}> <Button type="primary">Andere opleidingen</Button></Col>
                        </Row>
                        <Divider/>
                        <Row>
                            <Col span={12}> <h1 className="Title" style={{fontsize:100}}> Gastsprekers</h1></Col>
                            <Col span={12}> <h1 className="Title" style={{fontsize:100}}> Hogeschool Utrecht Events</h1></Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                {props.children}
                            </Col>
                            <Col span={12}>
                                {props.children}
                            </Col>
                        </Row>

                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>


        )

    }

    export default Customlayout;