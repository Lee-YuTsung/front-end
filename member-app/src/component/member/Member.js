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
    this.props.argue(user);
  }

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

    let page = 0;
    const login = <Login user={this.state} argue={this.login} />;
    const register = <Register />;
    const update = <Update user={this.state} />;

    return (
      <div>
        member
        <button onClick={this.show.bind(this)}>show</button>
        <button onClick={() => window.location.reload()}>reload</button>
        <div>
          
        </div>
      </div>
    )
  }
}
