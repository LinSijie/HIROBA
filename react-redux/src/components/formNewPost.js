import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import './formNewPost.css'

const { TextArea } = Input;
const FormItem = Form.Item;

class CreateNewPost extends Component{
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
		  if (!err) {
				console.log('Received values of form: ', values);
		  }
		});
	  }
	
	render(){
		const { getFieldDecorator } = this.props.form;
		return(
			<div>
				<p
					style={{
						fontSize: 14,
						color: 'rgba(0, 0, 0, 0.85)',
						marginTop: 20,
						textAlign: 'center',
						fontWeight: 500,
					}}
				>
					Create a new Post
				</p>
				<Form onSubmit={this.handleSubmit} className="new-post-form">
					<FormItem>
						{getFieldDecorator('postTitle', {
							rules: [{
								required: true, message: 'Please input the title!',
							}],
						})(
							<Input placeholder="Title"/>
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('postContent', {
							rules: [{
								required: true, message: 'Please input the content!',
							}],
						})(
							<TextArea rows={4} placeholder="Content" />
						)}
					</FormItem>
					<FormItem>
						<Button type="primary" htmlType="submit" className="new-post-form-button">Send</Button>
					</FormItem>
				</Form>
			</div>
			
		);
	}

};

export default CreateNewPost;

