import React, { Component } from 'react'
import Login from './Login';
import Update from './Update';
import Register from './Register';

export default class Member extends Component {

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
  };


  show(e){
    alert(this.state.id + "\n" + 
    this.state.name + "\n" + 
    this.state.username + "\n" + 
    this.state.password + "\n" + 
    this.state.address + "\n" + 
    this.state.phone + "\n" + 
    this.state.telephone + "\n" + 
    this.state.email + "\n");
  }

  render() {
    return (
      <div>
        <div className='container'>
        <ul className='nav nav-tabs' id='myTab'>
            <li className='nav-item'><a className='nav-link active' data-bs-toggle='tab' href='#tab1'>首頁</a></li>
            <li className='nav-item'><a className='nav-link' data-bs-toggle='tab' href='#tab2'>登入</a></li>
            <li className='nav-item'><a className='nav-link' data-bs-toggle='tab' href='#tab3'>註冊</a></li>
        </ul>

        <div className='tab-content' id='myTabContent'>
            <div className='tab-pane fade show active' id='tab1'><p>首頁</p></div>
            <div className='tab-pane fade' id='tab2'><Login user={this.state} argue={this.login} /></div>
            <div className='tab=pane fade' id='tab3'><Register/></div>
        </div>
    </div>
      </div>
    )
  }
}
