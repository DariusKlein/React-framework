import { Col, Divider, Layout, Menu, Row} from 'antd';
import React from "react";
import { Button } from 'antd';





const { Content } = Layout;



    const Customlayout0 = (props) => {
        return (

                <Layout>

                    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                        <div className="site-layout-background" style={{ padding: 0 }}>


                    <a href="Events"><Button type="/landing">Landing</Button> </a>

                        </div>
                    </Content>
            </Layout>


        )

    }

    export { Customlayout0}