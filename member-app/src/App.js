import React, { Component } from 'react'
import Hander from './component/Hander'
import Footer from './component/Footer'
import Member from './component/member/Member'
import Login from './component/member/Login'
import Register from './component/member/Register'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      
    }
    this.login = this.login.bind(this);
  }

  login(user){
    this.setState({
      user
    },() =>{alert(this.state.user.username + " , 歡迎登入")});
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="" element={<Member user={this.state} />}/>
          <Route path="/A" element={<Login user={this.state} argue={this.login} />}/>
          <Route path="/B" element={<Register />}/>
        </Routes>
      </Router>
    )
  }
}

