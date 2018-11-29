import React, { Component } from 'react';
import { Form, Input,  Select, Checkbox, Button } from 'antd';
import './formRegister.css';

const FormItem = Form.Item;
const Option = Select.Option;

class RegistrationForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
			<Form onSubmit={this.handleSubmit} className="register-form">
							<FormItem
								{...formItemLayout}
								label={(
									<span>
										User Name&nbsp;
									</span>
								)}
							>
								{getFieldDecorator('username', {
									rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
								})(
									<Input />
								)}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="E-mail"
							>
								{getFieldDecorator('email', {
									rules: [{
										type: 'email', message: 'The input is not valid E-mail!',
									}, {
										required: true, message: 'Please input your E-mail!',
									}],
								})(
									<Input />
								)}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="Password"
							>
								{getFieldDecorator('password', {
									rules: [{
										required: true, message: 'Please input your password!',
									}, {
										validator: this.validateToNextPassword,
									}],
								})(
									<Input type="password" />
								)}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="Confirm Password"
							>
								{getFieldDecorator('confirm', {
									rules: [{
										required: true, message: 'Please confirm your password!',
									}, {
										validator: this.compareToFirstPassword,
									}],
								})(
									<Input type="password" onBlur={this.handleConfirmBlur} />
								)}
							</FormItem>
							<FormItem
								{...formItemLayout}
								label="Identity"
							>
								{getFieldDecorator('identity', {
									rules: [{ required: true, message: 'Please input your identity!' }],
								})(
									<Select defaultValue="student" style={{ width: 120 }}>
										<Option value="student">Student</Option>
										<Option value="instructor">Instructor</Option>
									</Select>
								)}
							</FormItem>
							{/* <FormItem
								{...formItemLayout}
								label="Captcha"
								extra="We must make sure that your are a human."
							>
								<Row gutter={8}>
									<Col span={12}>
										{getFieldDecorator('captcha', {
											rules: [{ required: true, message: 'Please input the captcha you got!' }],
										})(
											<Input />
										)}
									</Col>
									<Col span={12}>
										<Button>Get captcha</Button>
									</Col>
								</Row>
							</FormItem> */}
							<FormItem {...tailFormItemLayout}>
								{getFieldDecorator('agreement', {
									valuePropName: 'checked',
								})(
									<Checkbox>I have read the <a href="">agreement</a></Checkbox>
								)}
							</FormItem>
							<FormItem {...tailFormItemLayout}>
								<Button type="primary" htmlType="submit">Register</Button>
							</FormItem>
						</Form>
    );
  }
}

export default RegistrationForm;