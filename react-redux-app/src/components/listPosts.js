import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, message, Spin, Button } from 'antd';
import './listPosts.css';

import InfiniteScroll from 'react-infinite-scroller';

const DataUrl = 'http://hiroba.czy-kasakun.com:8080/posts/queryAll';

class InfinitePostList extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true,
  }

  fetchQueryAll =(callback)=> {
    fetch(DataUrl , {
      method: 'POST',
      headers: {},
      body: {},
    }).then((response) => {
      if (response.ok) {
          return response.json();
      }
    }).then((json) => {
      callback(json);
    }).catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    this.fetchQueryAll((json)=>{
      this.setState({
        data: json,
      });
      console.log("in fetchQueryAll callback, set state",this.state.data);
    }

    );
    console.log("in componentDidMount",this.state.data);
  }

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
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
    this.fetchQueryAll((json) =>{
      data = data.concat(json);
      this.setState({
        data,
        loading:false,
      })
    });
  }

  render() {
    console.log("in render",this.state.data);
    return (
      <div className="demo-infinite-container">
        <Button type="primary" className="new-post-button">
          <Link to='/course/newpost'>New Post</Link >
				</Button>
        <InfiniteScroll
          initialLoad={true}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={false}
        >
          <List
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<a href="course/postdetail">{item.title}</a>}
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

export default InfinitePostList;