import React from "react";

import {Col, Divider, Layout, Menu, Row} from 'antd';
import { Input } from 'antd';
import { InputNumber } from 'antd';
import { Switch , Button} from 'antd';


import { DatePicker } from 'antd';



import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import AdminView from "../container/AdminView";
const { TextArea } = Input;

const { Header, Sider, Content } = Layout;

function onChange1(value) {
    console.log('changed', value);
}
function onChange2(checked) {
    console.log(`switch to ${checked}`);
}
function onChange3(date, dateString) {
    console.log(date, dateString);
}

class Admin extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Nieuwe events
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            Events Editen
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            Events beheren
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Input placeholder="Title" />
                        <TextArea rows={4} />
                        <h1 className="mensen" style={{fontSize:10}}>Max aantal personen</h1>
                        <InputNumber min={1} max={1000} defaultValue={1} onChange={onChange1} />
                        <h1 className="openbaar" style={{fontSize:10}}>Openbaar</h1>
                        <Switch defaultChecked onChange={onChange2} />
                        <h1 className="18+" style={{fontSize:10}}>18+</h1>
                        <Switch defaultChecked onChange={onChange2} />
                        <h1 className="placeholder" style={{fontSize:10}}></h1>
                        <Switch defaultChecked onChange={onChange2} />
                        <Divider/>
                        <h1 className="Datepicker" style={{fontSize:10}}>Begin datum</h1>
                        <DatePicker onChange={onChange3} />
                        <br />
                        <h1 className="Datepicker" style={{fontSize:10}}>Eind datum</h1>
                        <DatePicker onChange={onChange3} />
                        <br />
                        <Divider/>
                        <Row>
                            <Col span={12}>

                                <Button>continue</Button>
                            </Col>
                            <Col span={12}>

                                <Button>cancel</Button>
                            </Col>

                        </Row>


                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Admin