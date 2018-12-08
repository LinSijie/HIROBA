import React, { Component } from 'react';
import { Button, Modal, Form, Input, message } from 'antd';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './newPostModal.css';

import {addNewPostAsync} from "../actions/postAction";

const { TextArea } = Input;
const FormItem = Form.Item;
  
const NewPostForm = Form.create()(
	// eslint-disable-next-line
	class extends Component {
		render() {
			const {
				visible, onCancel, onCreate, form,
			} = this.props;
			const { getFieldDecorator } = form;
			return (
				<Modal
				visible={visible}
				title="Create a Post"
				okText="Create"
				onCancel={onCancel}
				onOk={onCreate}
				>
				<Form layout="vertical">
					<FormItem label="Title">
					{getFieldDecorator('postTitle', {
						rules: [{ required: true, message: 'Please input the title of your post.' }],
					})(
						<Input />
					)}
					</FormItem>
					<FormItem label="Content">
					{getFieldDecorator('postContent')(<TextArea/>)}
					</FormItem>
				</Form>
				</Modal>
			);
		}
	}
);
  
class NewPostModal extends Component {
	state = {
	  visible: false,
	};

	fetchData = (data) => {
		const { dispatch, userId } = this.props;
		if (userId === undefined){
			message.error("Please log in to post!")
		}
		else{
			dispatch(addNewPostAsync(data, userId));
		}	
	}
  
	showModal = () => {
	  this.setState({ visible: true });
	}
  
	handleCancel = () => {
	  this.setState({ visible: false });
	}
  
	handleCreate = () => {
	  const form = this.formRef.props.form;
	  form.validateFields((err, values) => {
			if (err) {
				return;
			}
		
			console.log('Received values of form: ', values);
			this.fetchData(values);
			form.resetFields();
			this.setState({ visible: false });
	  });
	}
  
		saveFormRef = (formRef) => {
			this.formRef = formRef;
		}
		
		render() {
			return (
				<div>
					<Button className= "new-post-button" type="primary" onClick={this.showModal}>New Post</Button>
					<NewPostForm
					wrappedComponentRef={this.saveFormRef}
					visible={this.state.visible}
					onCancel={this.handleCancel}
					onCreate={this.handleCreate}
					/>
				</div>
			);
		}
}

const mapState = state => ({
	data: state.posts.data,
	userId: state.user.userId
});
export default connect(mapState)(NewPostModal);