import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './newPostButton.css';

class newPostButton extends Component{
	render(){
		return(
			<Button type="primary" className="new-post-button">
				<Link to='/course/newpost'>New Post</Link >
			</Button>
		);
	}
}

export default newPostButton;