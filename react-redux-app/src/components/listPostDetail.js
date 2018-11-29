import React, { Component } from 'react';
import { Card, List, Icon, Avatar } from 'antd';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class PostDetail extends Component{
	render(){
		return(
			<Card title="Post Detail" className = "post-detail">
				<p
					style={{
						fontSize: 14,
						color: 'rgba(0, 0, 0, 0.85)',
						marginBottom: 16,
						fontWeight: 500,
					}}
				>
					Question about HW1
				</p>
				<p
					style={{
						fontSize: 12,
						color: 'rgba(0, 0, 0, 0.85)',
						marginBottom: 16,
						fontWeight: 400,
					}}
				>
					Content of Question.
					Los Angeles battles huge wildfires.
					Los Angeles battles huge wildfires.
					Los Angeles battles huge wildfires.
				</p>
				<List
					itemLayout="vertical"
					size="large"
					pagination={{
						onChange: (page) => {
							console.log(page);
						},
						pageSize: 3,
					}}
					dataSource={listData}
					renderItem={item => (
						<List.Item
							actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
						>
							{/* <Card
								type="inner"
								title= {item.title}
							>
								{item.description}
							</Card> */}
							<List.Item.Meta
									avatar={<Avatar src={item.avatar} />}
									title={<a href={item.href}>{item.title}</a>}
									description={item.description}
								/>
								{item.content}
						</List.Item>)}
				/>
			</Card>
		);
	}
};

export default PostDetail;

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `comment ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}