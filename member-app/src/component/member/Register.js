import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {

  register(e){
    let user = {
      name:document.registerForm.name.value,
      username:document.registerForm.username.value,
      password:document.registerForm.password.value,
      address:document.registerForm.address.value,
      phone:document.registerForm.phone.value,
      telephone:document.registerForm.telephone.value,
      email:document.registerForm.email.value
    }

    //alert("password: " + user.password);

    let add = axios({
      url:'http://localhost:8080/member/register',
      method:'post',
      data:{
        name:document.registerForm.name.value,
        username:document.registerForm.username.value,
        password:document.registerForm.password.value,
        address:document.registerForm.address.value,
        phone:document.registerForm.phone.value,
        telephone:document.registerForm.telephone.value,
        email:document.registerForm.email.value
      },
      headers:{'Content-Type':'application/json'}
    });

    add.then((response) => {
      console.log(response.data);
      alert("註冊成功");
    }).catch(function(error){

      if(error.response){

          console.log('Server responded with a non-2xx statues:', error.response.status);
      }else if(error.request){

          console.log('No response received from the server');
      }else{
          console.log('Error sending the request:', error.message);
      }
    });

    e.preventDefault();
    window.location.assign("http://localhost:3000");
  }

  render() {
    return (
      <div>
        Register
        <form name='registerForm' onSubmit={this.register.bind(this)} method='post'>
          name:<input type='text' name='name' /><br/>
          username:<input type='text' name='username' /><br/>
          password:<input type='password' name='password' /><br/>
          address:<input type='text' name='address' /><br/>
          phone:<input type='text' name='phone' /><br/>
          telephone:<input type='text' name='telephone' /><br/>
          email:<input type='text' name='email' /><br/>
          <input type='submit' name='register' />
        </form>
      </div>
    )
  }
}
