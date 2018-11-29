import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Form, Icon, Menu } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

//import menuLoggedOut from './components/menuLoggedOut';
//import menuLoggedIn from './components/menuLoggedIn';
import HomePage from './components/buttonHomepage';
import NormalLoginForm from './components/formLogin';
import RegistrationForm from './components/formRegister';
import CoursePageLayout from './components/layoutCourse';

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
              <Menu.Item key="1"><Link to='/'><Icon type="team" />HIROBA</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/course'><Icon type="global" />Computer Network</Link></Menu.Item>	
            </Menu>
              {/* <Route exact path="/" component={menuLoggedOut}/>
              <Route path="/login" component={menuLoggedOut}/>
              <Route path="/register" component={menuLoggedOut}/>
              <Route path="/course" component={menuLoggedIn}/> */}
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
                <Route path="/course" component={CoursePageLayout}/>
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