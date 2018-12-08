import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost } from '../actions/postAction';
import './post.css'
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

  componentDidUpdate(prevProps, prevState) {
    const { dispatch, post, nextId } = this.props;
    console.log(post)
    if (nextId !== -1) {
      dispatch(fetchPost(nextId));
    }  
  }

  render() {
    const { post } = this.props;
    return (
      <div> 
        <Card className="post-detail-card">
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