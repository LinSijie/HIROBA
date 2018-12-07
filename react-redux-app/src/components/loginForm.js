import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './loginForm.css';
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';

import { login, loginInit } from '../actions/userAction';

const FormItem = Form.Item;

class NormalLoginForm extends Component {

  handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				const { dispatch, data } = this.props;
				dispatch(login(values));				
			}
		});
	}
	
	componentDidUpdate(){
		const { dispatch, code } = this.props;
		console.log("code=", code);
		if (code === 200){
			message.success("Login Success");
			dispatch(loginInit());
		}
		else if (code === 1003){
			message.error("Invalid Password");
			dispatch(loginInit());
		}
		else if (code === 1002){
			message.error("Invalid ID");
			dispatch(loginInit());
		}
	}

  render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<p
					style={{
						fontSize: 20,
						color: 'rgba(0, 0, 0, 0.85)',
						marginTop: 20,
						textAlign: 'center',
						fontWeight: 500,
					}}
				>
					Welcome to HIROBA!
				</p>

				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
						{getFieldDecorator('userId', {
						rules: [{ required: true, message: 'Please input your Student/Worker id!' }],
						})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Student / Worker id" />
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('password', {
						rules: [{ required: true, message: 'Please input your Password!' }],
						})(
						<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('remember', {
						valuePropName: 'checked',
						initialValue: true,
						})(
						<Checkbox>Remember me</Checkbox>
						)}
						<a className="login-form-forgot" href="#">Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
						Or <a href="../register">register now!</a>
					</FormItem>
				</Form> 
			</div>
		);
  }
}

const mapState = state => ({
  	code: state.user.code
});
export default connect(mapState)(NormalLoginForm);