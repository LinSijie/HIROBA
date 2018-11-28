import React, { Component } from 'react';
import { Card } from 'antd';
import './cardBulletin.css';

class BulletinBoard extends Component{
	render(){
		return(
			<Card title="Bulletin Board" className = "bulletin-board">
				<p
					style={{
						fontSize: 14,
						color: 'rgba(0, 0, 0, 0.85)',
						marginBottom: 16,
						fontWeight: 500,
					}}
				>
					Upcoming Quiz
				</p>
				<Card
					type="inner"
					title="Quiz 1"
					extra={<a href="#">More</a>}
				>
					Quiz for Chapter 1.
				</Card>
				<Card
					style={{ marginTop: 16 }}
					type="inner"
					title="Quiz 2"
					extra={<a href="#">More</a>}
				>
					Quiz for Chapter 2.
				</Card>
			</Card>
		);
	}
};

export default BulletinBoard;
