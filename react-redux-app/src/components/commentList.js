import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { List, Icon } from 'antd';
import './commentList.css';

import { fetchComments } from "../actions/commentAction";

const IconText = ({ type, text }) => (
	<span>
	  <Icon type={type} style={{ marginRight: 8 }} />
	  {text}
	</span>
);

class CommentList extends Component {
  static propTypes = {
	data: PropTypes.array,
	dispatch: PropTypes.func.isRequired,
	//history: PropTypes.object.isRequired,
	//location: PropTypes.object.isRequired
  };

  componentDidUpdate() {
		const { nextId } = this.props;
      if(nextId !== -1) {
        this.fetchData(nextId);
    }
  }

  fetchData = (postId) => {
		const { dispatch } = this.props;
		dispatch(fetchComments(postId));
  }

  render() {
	return (
	  <div className="comment-infinite-container">
			<List
				dataSource={this.props.data}
				renderItem={item => (
					<List.Item 
					key={item.id}
					actions={[ <IconText type="like-o"/>, <IconText type="message"/>]}
				>
					<List.Item.Meta
						title={item.content}
						description= {
							<div>
								from
								{item.fromUid}
								to
								{item.toUid}
							</div>
						}
					/>
					</List.Item>
				)}
			>
			</List>
	  </div>
	);
  }
}
const mapState = state => ({
	nextId: state.post.nextId,
  data: state.comments.data
});

export default connect(mapState)(CommentList);