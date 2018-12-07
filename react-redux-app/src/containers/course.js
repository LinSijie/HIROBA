import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Layout, Form } from 'antd';

import NewPostButton from '../components/newPostButton'
import PostList from '../components/postList';
import Post from '../components/post';
import CommentList from '../components/commentList'
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
						<NewPostButton/>
						<PostList/>
					</Sider>
					<Layout>
						<Content>
              <Post/>
							<CommentList/>
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