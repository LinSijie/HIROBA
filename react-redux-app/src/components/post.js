import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost } from '../actions';

class Post extends Component {
    static propTypes = {
      nextId: PropTypes.number,
      post: PropTypes.array,
      dispatch: PropTypes.func.isRequired,
      history: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired
    };

    // componentDidMount() {
      
    // }

    componentDidUpdate(prevProps, prevState) {
      const { nextId } = this.props;
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
      return (
        <div> 
          {post.length > 0 && (<h1> {post[0].title}</h1>)}
        </div>
      );
    }
  }
  const mapState = state => ({
    nextId: state.post.nextId,
    post: state.post.data
  });
  
  export default connect(mapState)(Post);