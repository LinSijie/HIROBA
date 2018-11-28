import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import PostList from './listPosts';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class CoursePageLayout extends Component{
	render(){
		return(
			<div>
				<Layout>
					<Sider width={300} style={{ background: '#fff' }}>
						{/* <Route path="/course" component={PostList}/> */}
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
							Content
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default CoursePageLayout;