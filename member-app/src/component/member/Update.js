import React, { Component } from 'react'

export default class Update extends Component {

  constructor(props){
    super(props);
    this.state = {
      id:props.user.id,
      name:props.user.name,
      username:props.user.username,
      password:props.user.password,
      address:props.user.address,
      phone:props.user.phone,
      telephone:props.user.telephone,
      email:props.user.email
    }
  }

  render() {
    return (
      <div>
        update
        <table>
          <tr>
            <td>name:</td>
            <td><input type="text" name="name" value={this.state.name} /></td>
          </tr>
          <tr>
            <td>address:</td>
            <td><input type="text" name="address" value={this.state.address} /></td>
          </tr>
          <tr>
            <td>phone:</td>
            <td><input type="text" name="phone" value={this.state.phone} /></td>
          </tr>
          <tr>
            <td>telephone:</td>
            <td><input type="text" name="telephone" value={this.state.telephone} /></td>
          </tr>
          <tr>
            <td>email:</td>
            <td><input type="text" name="email" value={this.state.email} /></td>
          </tr>
        </table>
      </div>
    )
  }
}
