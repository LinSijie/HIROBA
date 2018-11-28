import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Layout, Menu, Form } from 'antd';
import './App.css';
import 'antd/dist/antd.css';

import menuLoggedOut from './components/menuLoggedOut';
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
              <Route path="/" component={menuLoggedOut}/>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div>
                <Route path="/login" render = {() => (
                  <div>
                    <h1 style={{ textAlign: 'center'}}>Welcome to HIROBA</h1>
                    <WrappedNormalLoginForm/>
                  </div>
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