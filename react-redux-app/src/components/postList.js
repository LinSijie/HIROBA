import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { List, message, Spin, Button } from 'antd';
import './postList.css';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchPosts, changeNextId } from "../actions";

class PostList extends Component {
  static propTypes = {
    data: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    loading: false,
    hasMore: true,
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const { dispatch } = this.props;
    dispatch(fetchPosts());
  }

  handleInfiniteOnLoad = () => {
    let { data } = this.props;
    this.setState({
      loading: true,
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
  }
  
  handleClick(postId) {
    const { dispatch } = this.props;
    dispatch(changeNextId(postId));
  }

  render() {
    return (
      <div className="demo-infinite-container">
        <Button type="primary" className="new-post-button">
          <Link to='/course/newpost'>New Post</Link >
				</Button>
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={false}
          hasMore= {false}
          useWindow={false}
        >
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
            {this.state.loading && this.state.hasMore && (
              <div className="demo-loading-container">
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}
const mapState = state => ({
  data: state.posts.data
});

export default connect(mapState)(PostList);