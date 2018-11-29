import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Form } from 'antd';

import PostList from './listPosts';
import BulletinBoard from './cardBulletin';
import NewPostForm from './formNewPost';
import PostDetail from './listPostDetail';

const { Sider, Content } = Layout;

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
							<Route path="/course/newpost" render = {() => (
                  <WrappedNewPostForm/>
              )}/>
							<Route path="/course/postdetail" component={PostDetail}/>
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default CoursePageLayout;

const WrappedNewPostForm = Form.create()(NewPostForm);