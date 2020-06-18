import { Col, Divider, Layout, Menu, Row} from 'antd';
import React from "react";
import { Button } from 'antd';
import Eventslistview from "./Eventslistview";
import { UserOutlined } from '@ant-design/icons';




const { Header, Content } = Layout;



    const Customlayout = (props) => {
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
                                <Col span={24}> <h1 className="Title" style={{fontSize:40}}> Hogeschool Utrecht Events en Gastsprekers</h1></Col>

                            </Row>
                            <Divider/>
                            <Row>
                                <Col span={8}> <a href="Events"><Button type="primary">Open ICT</Button> </a> </Col>
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
                                    <Eventslistview/>
                                </Col>
                                <Col span={12}>
                                    <Eventslistview/>

                                </Col>
                            </Row>

                        </div>
                    </Content>
            </Layout>


        )

    }

    export { Customlayout}