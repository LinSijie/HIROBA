import React, { Component } from 'react';
import { Button, Form, Input } from 'antd';
import { connect } from "react-redux";	
import { addNewCommentAsync } from '../actions/commentAction';

const FormItem = Form.Item;
const { TextArea } = Input;

class NewComment extends Component {
	
	fetchData = (data) => {
		const { dispatch, currId } = this.props;
		if (currId !== undefined){
			dispatch(addNewCommentAsync(data, currId));
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
			<div>
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

				<Form onSubmit={this.handleSubmit}>
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
  	data: state.comments.data
});
export default connect(mapState)(NewComment);