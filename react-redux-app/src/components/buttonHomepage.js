import React, { Component } from 'react';
import { Link }from 'react-router-dom'
import './buttonHomepage.css';
import { Button } from 'antd';

class HomePage extends Component{
	render(){
		return(
			<div className="homepage-content">
				<p
					style={{
						fontSize: 20,
						color: 'rgba(0, 0, 0, 0.85)',
						marginTop: 50,
						marginBottom: 50,
						textAlign: 'center',
						fontWeight: 500,
					}}
				>
					Welcome to HIROBA!
				</p>

				<Button type="primary" className="sign-in-button">
					<Link to='/login'>Sign in</Link >
				</Button>
				<p
					style={{
						fontSize: 10,
						color: 'rgba(0, 0, 0, 0.85)',
						marginTop: 10,
						marginBottom:10,
						textAlign: 'center',
						fontWeight: 500,
					}}
				>
					or
				</p>
				<Button type="primary" className="sign-up-button">
					<Link to='/register'>Sign up</Link >
				</Button>
			</div>
		);
	}
}

export default HomePage;