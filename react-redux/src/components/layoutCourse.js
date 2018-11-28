import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import PostList from './listPosts';
import BulletinBoard from './cardBulletin';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class CoursePageLayout extends Component{
	render(){
		return(
			<div>
				<Layout>
					<Sider width={300} style={{ background: '#fff' }}>
						<Route path="/course" component={PostList}/>
					</Sider>
					<Layout>
						<Content>
							<Route exact path="/course" component={BulletinBoard}/>
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default CoursePageLayout;