import axios from 'axios';
import React, { Component } from 'react'

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
      //alert(response.data);
      this.props.argue(response.data);
    })
    .catch(error => {
      console.log('發生錯誤: ', error);
    });
    
    //alert(document.loginForm.username.value + "\n" + document.loginForm.password.value);
    
    e.preventDefault();
  }

  render() {
    return (
      <div>
        login
        <form name="loginForm" onSubmit={this.login.bind(this)} method='post'>
          username:<input type="text" name="username" /><br/>
          password:<input type="password" name="password" /><br/>
          <input type="submit" value="login" />
        </form>
      </div>
    )
  }

  
}
