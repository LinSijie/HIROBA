import React, { Component } from 'react';
// import {  } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { browserHistory } from 'react-router'
import { Layout, Form, Icon, Menu } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

//import menuLoggedOut from './components/menuLoggedOut';
//import menuLoggedIn from './components/menuLoggedIn';
import HomePage from './components/buttonHomepage';
import NormalLoginForm from './components/loginForm';
import RegistrationForm from './components/registerForm';
// import CoursePageLayout from './components/layoutCourse';
import Course from './containers/course';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout className="layout">
            <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><Icon type="team" />HIROBA</Menu.Item>
              <Menu.Item key="2"><Icon type="global" />Computer Network</Menu.Item> 
              <Menu.Item key="3"><Link to='/'>LOG OUT</Link></Menu.Item>               
            </Menu>
            </Header>
            <Content>
              <div>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" render = {() => (
                  <WrappedNormalLoginForm/>
                )}/>
                <Route path="/register" render = {() => (
                  <WrappedRegistrationForm/>
                )}/>
                <Route path="/course" component={Course}/>
              </div>             
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              HIROBA ©2018 Created by LSJ
            </Footer>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
const WrappedRegistrationForm = Form.create()(RegistrationForm);