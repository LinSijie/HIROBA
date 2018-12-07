import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { List, Button, Affix } from 'antd';
import './postList.css';

import { fetchPosts, postChangeNextId } from "../actions/postAction";
import { commentChangeNextId } from "../actions/commentAction";

class PostList extends Component {
  static propTypes = {
    data: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    //history: PropTypes.object.isRequired,
    //location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }
  
  handleClick(postId) {
    const { dispatch } = this.props;
    dispatch(postChangeNextId(postId));
    dispatch(commentChangeNextId(postId));
  }

  render() {
    return (
      <div className="demo-infinite-container">
        {/* <Affix offsetTop = "500">
          <Button type="primary" className="new-post-button">
            <Link to='/course/newpost'>New Post</Link >
          </Button>
        </Affix> */}
        <List 
          dataSource={this.props.data}
          renderItem={item => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={<a href="#" onClick={() => { this.handleClick(item.id)}}>{item.title}</a>}
                description= {item.users}
              />
              { item.status }
            </List.Item>
          )}
        >
        </List>
      </div>
    );
  }
}
const mapState = state => ({
  data: state.posts.data
});

export default connect(mapState)(PostList);