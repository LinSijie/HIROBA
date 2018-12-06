import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost } from '../actions/postAction';

import { Card } from 'antd';

const { Meta } = Card;

class Post extends Component {
    static propTypes = {
      nextId: PropTypes.number,
      post: PropTypes.array,
      dispatch: PropTypes.func.isRequired,
      //history: PropTypes.object.isRequired,
      //location: PropTypes.object.isRequired
    };

    // componentDidMount() {
      
    // }

    componentDidUpdate(prevProps, prevState) {
      // const { prevNextId } = prevProps.nextId;
      console.log("prevProps = ", prevProps);
      const { nextId } = this.props;
      console.log("nextId = ", nextId);
      if(nextId !== -1) {
        this.fetchData(nextId);
      }
    }

    fetchData(postId) {
      const { dispatch } = this.props;
      dispatch(fetchPost(postId));
    }

    render() {
      const { post } = this.props;
      console.log(post)
      return (
        <div> 
          <Card>
            <Meta
              title= {post.length > 0 && (<div> {post[0].title} </div>)}
              description= {post.length > 0 && (<div> {post[0].content} </div>)}
            />
          </Card>
        </div>
      );
    }
  }
  const mapState = state => ({
    nextId: state.post.nextId,
    post: state.post.data
  });
  
  export default connect(mapState)(Post);