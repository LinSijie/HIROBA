import React, { Component } from 'react'
import { BrowserRouter as  Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './menuLoggedOut.css';

import { Menu, Icon } from 'antd';

class menuLoggedIn extends Component {
	render(){
		return (
			<div className = "menuLoggedIn">
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="1"><Icon type="team" />HIROBA</Menu.Item>
					<Menu.Item key="2"><Icon type="global" />Computer Network</Menu.Item>
					<Menu.Item key="3" disable="true" style={{textAlign: 'right'}}>
						<Icon type="user" />
						User Name
					</Menu.Item>
					<a 
						href=""
						style={{ marginRight: 10 }}
					>
						Sign Out
					</a>
				</Menu>                          
			</div>
		);
	}
}

export default menuLoggedIn;