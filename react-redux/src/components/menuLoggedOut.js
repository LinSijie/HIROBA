import React, { Component } from 'react'
import { BrowserRouter as  Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Menu, Icon } from 'antd';

class menuLoggedOut extends Component {
	render(){
		return (
			<div className = "menuLoggedOut">
				<Menu
					theme="dark"
					mode="horizontal"
					defaultSelectedKeys={['1']}
					style={{ lineHeight: '64px' }}
				>
					<Menu.Item key="1"><Icon type="team" />HIROBA</Menu.Item>	
				</Menu>

			</div>
		);
	}
}

export default menuLoggedOut;