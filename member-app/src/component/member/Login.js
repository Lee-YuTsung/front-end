import axios from 'axios';
import React, { Component } from 'react'
import Hander from '../Hander';
import Footer from '../Footer';

export default class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      
    }
    this.login = this.login.bind(this);
  }

  login(e){

    let user = axios({
      url:'http://localhost:8080/member/login',
      method:'post',
      params:{
        username:document.loginForm.username.value, 
        password:document.loginForm.password.value
      }
    })
    .then(response => {
      // alert(response.data !== "" ? response.data : "帳號密碼錯誤");
      if(response.data !== ""){
        this.props.argue(response.data);
      }else{
        alert("帳號密碼錯誤");
      }
      
    })
    .catch(error => {
      console.log('發生錯誤: ', error);
    });
    
    //alert(document.loginForm.username.value + "\n" + document.loginForm.password.value);
    
    e.preventDefault();
    //window.location.assign("http://localhost:3000");
  }

  render() {
    return (
      <div className='container'>
        <div className='hander'><Hander/></div>
        <div className='content'>
          <form name="loginForm" onSubmit={this.login.bind(this)} method='post'>
            username:<input type="text" name="username" /><br/>
            password:<input type="password" name="password" /><br/>
            <input type="submit" value="login" /><br/>
          </form>
          <a href='#B'>register</a>
        </div>
        <div className='footer'><Footer/></div>
      </div>
    )
  }

  
}
