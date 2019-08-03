
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { List, Avatar, Icon } from 'antd';
import { Segment } from 'semantic-ui-react'
import { Button } from 'react-md';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        // href: 'http://ant.design',
        title: `News ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            'A new method for learning English more efficient.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

export default class SegmentCreateNews extends Component {
    render() {
        return (
            <Segment>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 4,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText type="star-o" text="156" />,
                                <IconText type="like-o" text="156" />,
                                <IconText type="message" text="2" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            > </List.Item.Meta>
                            {item.content}<br></br>
                            
                        </List.Item>
                    )}
                />
            </Segment>
        )
    }
}
