import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Layout } from 'antd';

import PostList from '../components/postList';
import Post from '../components/post';
// import BulletinBoard from './cardBulletin';
// import NewPostForm from './formNewPost';
// import PostDetail from './listPostDetail';

const { Sider, Content } = Layout;

class Course extends Component{
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
	render(){
    // console.log(this.props.location.search);
		return(
			<div>
				<Layout>
					<Sider width={300} style={{ background: '#fff' }}>
						<PostList/>
					</Sider>
					<Layout>
						<Content>
              <Post/>
							{/* <Route exact path="/course" component={BulletinBoard}/>
							<Route path="/course/newpost" render = {() => (
                  <WrappedNewPostForm/>
              )}/>
							<Route path="/course/postdetail" component={PostDetail}/> */}
						</Content>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default Course;

// const WrappedNewPostForm = Form.create()(NewPostForm);