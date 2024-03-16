import React, { Component } from 'react'
import Hander from './component/Hander'
import Footer from './component/Footer'
import Login from './component/member/Login'
import Logout from './component/member/Logout'
import Register from './component/member/Register'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Update from './component/member/Update'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
    this.login = this.login.bind(this);
  }


  login(user){
    this.setState({
      id:user.id,
      name:user.name,
      username:user.username,
      password:user.password,
      address:user.address,
      phone:user.phone,
      telephone:user.telephone,
      email:user.email
    },() =>{alert(this.state.username + "，歡迎登入")});
  }

  render() {
    return (
      <div class='container'>
        app
        <div><Hander /></div>
        <Router>
          <Link to="/">index</Link>,
          <Link to="/side">{this.state.id === undefined ? "login" : "logout"}</Link>,
          <Link to="/data">{this.state.id === undefined ? "register" : "update"}</Link>
          <Routes>
            <Route path="/side" element={<Login user={this.state} argue={this.login}/>} />
            <Route path="/data" element={this.state.id === undefined ? <Register /> : <Update user={this.state} />}/>
          </Routes>
        </Router>
        <div><Footer /></div>
      </div>
      
    )
  }
}

