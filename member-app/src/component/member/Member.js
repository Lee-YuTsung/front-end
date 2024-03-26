import React, { Component } from 'react'
import axios from 'axios';
import Hander from '../Hander';
import Footer from '../Footer';

export default class Member extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
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
        this.setState(response.data, () =>{console.log(this.state);});
        
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

  logout(){
    this.setState(null);
  }

  show(e){
    alert(this.state + "\n" + 
    this.state.id + "\n" + 
    this.state.name + "\n" + 
    this.state.username + "\n" + 
    this.state.password + "\n" + 
    this.state.address + "\n" + 
    this.state.phone + "\n" + 
    this.state.telephone + "\n" + 
    this.state.email + "\n");
    console.log(this.state);
  }

  render() {
    return (
      <div className='container'>
        <div className='hander'><Hander/></div>
        <div className='content'>
          <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <a className='navbar-brand' href=''>index</a>

            <div className='text-end'>
              <button type='button' className='btn btn-outline-light me-2' data-bs-toggle='modal' data-bs-target='#myModal'>login</button>
            </div>
            
          </nav>

          <div className='modal' id='myModal'>
            <div className='modal-dialog'>
              <div className='modal-content'>
              
                <div className="modal-header">
                  <h4 className="modal-title">login</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                  <form name="loginForm" onSubmit={this.login.bind(this)} method='post'>
                    username:<input type="text" name="username" /><br/>
                    password:<input type="password" name="password" /><br/>
                    <input  className="btn btn-danger" data-bs-dismiss="modal" type="submit" value="login" /><br/>
                  </form>
                </div>

                {/* <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-bs-dismiss="modal">關閉</button>
                </div> */}
              </div>
            </div>
          </div>

          <button onClick={this.show.bind(this)}>show</button>
        </div>
        <div className='footer'><Footer/></div>
      </div>
    )
  }
}
