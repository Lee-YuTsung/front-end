import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.logout = this.logout.bind(this);
    }

    logout(e){
        this.props.argue();
    }

  render() {
    return (
      <div>Logout</div>
    )
  }
}
