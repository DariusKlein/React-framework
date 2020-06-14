import { Col, Divider, Layout, Menu, Row} from 'antd';
import React from "react";
import { Button } from 'antd';
import Eventslistview from "./Eventslistview";

import { Input } from 'antd';
import { DatePicker } from 'antd';
import { Select } from 'antd';
import SizeContext from "antd/es/config-provider/SizeContext";
import {ColSize} from "antd/es/col";

const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function onChange(date, dateString) {
    console.log(date, dateString);
}

const { Search } = Input;

const { Header, Content, Footer } = Layout;

    const Customlayout4 = (props) => {
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
                                <Col span={6}>
                                    <Search
                                        placeholder="input search text"
                                        enterButton="Search"
                                        size="large"
                                        onSearch={value => console.log(value)}
                                    />
                                    <h1 className="Title" style={{fontSize:40}}> Filter</h1>
                                    <DatePicker onChange={onChange} />
                                    <Divider/>
                                    <h1 className="Title" style={{fontSize:15}}> Filter placeholder 1</h1>
                                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>
                                            Disabled
                                        </Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <h1 className="Title" style={{fontSize:15}}> Filter placeholder 1</h1>
                                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>
                                            Disabled
                                        </Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <h1 className="Title" style={{fontSize:15}}> Filter placeholder 1</h1>
                                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>
                                            Disabled
                                        </Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <h1 className="Title" style={{fontSize:15}}> Filter placeholder 1</h1>
                                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="disabled" disabled>
                                            Disabled
                                        </Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>

                                </Col>
                                <Col span={18}>
                                    <Eventslistview/>
                                </Col>
                            </Row>


                        </div>
                    </Content>
            </Layout>


        )

    }

    export { Customlayout4}