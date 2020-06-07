import React from "react";

import { List, Avatar } from 'antd';


const Events = (props) => {
    return(

        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 10,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    extra={
                        <img
                            width={100}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.beschrijving}
                    />
                    {item.content}
                </List.Item>
            )}
        />
        )
}


export default Events