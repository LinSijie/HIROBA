import React, { Component } from 'react';
import { Button, Form, Input, message } from 'antd';
import { connect } from "react-redux";	
import { addNewCommentAsync } from '../actions/commentAction';

const FormItem = Form.Item;
const { TextArea } = Input;

class NewComment extends Component {
	
	fetchData = (data) => {
		const { dispatch, currId, userId } = this.props;
		if (currId !== undefined){
			if(userId === undefined){
				message.error("Please log in to comment!")
			}
			else{
				console.log("dispatch addNewCommentAsync() ");
				dispatch(addNewCommentAsync(data, currId, userId));
			}
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
				console.log('Received values of form: ', values);
				this.fetchData(values);
		  }
		});
		this.props.form.resetFields();
	}

	render() {
	  const { getFieldDecorator } = this.props.form;
		return (
			<div className="new-comment-form">
				{/* <p
					style={{
						fontSize: 14,
						color: 'rgba(0, 0, 0, 0.85)',
						marginTop: 20,
						textAlign: 'center',
						fontWeight: 500,
					}}
				>
					New Comment
				</p> */}

				<Form onSubmit={this.handleSubmit} className="new-comment-form">
					<FormItem>
						{getFieldDecorator('commentContent', {
							rules: [{
								required: true, message: 'Please input your comment.',
							}],
						})(
							<TextArea rows={4} placeholder="New Commment" />
						)}
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" className="send-comment-button">
							Send Comment
						</Button>
					</FormItem>
				</Form> 
			</div>
		);
	}
}

const mapState = state => ({
	nextId: state.comments.nextId,
	currId: state.comments.currId,
	data: state.comments.data,
	userId: state.user.userId,
});
export default connect(mapState)(NewComment);