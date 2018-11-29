import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './formLogin.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';


const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
	e.preventDefault();
	this.props.form.validateFields((err, values) => {
	  if (!err) {
			console.log('Received values of form: ', values);
	  }
	});
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
						{getFieldDecorator('userName', {
						rules: [{ required: true, message: 'Please input your username!' }],
						})(
						<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
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
						<a className="login-form-forgot" href="">Forgot password</a>
						<Button type="primary" htmlType="submit" className="login-form-button">
							<Link to='/course'>Log in</Link >
						</Button>
						Or <a href="">register now!</a>
					</FormItem>
				</Form> 
			</div>
		);
  }
}

export default NormalLoginForm;
