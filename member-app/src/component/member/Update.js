import React, { Component } from 'react'
import axios from 'axios';

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

  update(e){
    let data = axios({
      url:'http://localhost:8080/member/update',
      method:'post',
      data:{
        id:this.state.id,
        name:document.updateForm.name.value,
        username:this.state.username,
        password:this.state.password,
        address:document.updateForm.address.value,
        phone:document.updateForm.phone.value,
        telephone:document.updateForm.telephone.value,
        email:document.updateForm.email.value
      },
      headers:{'Content-Type':'application/json'}
    });

    data.then((response) => {
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
  }
  render() {
    let user = {
      id:this.state.id,
      name:this.state.name,
      username:this.state.username,
      password:this.state.password,
      address:this.state.address,
      phone:this.state.phone,
      telephone:this.state.telephone,
      email:this.state.email
    }
    return (
      <div>
        update
        <form name='updateForm' onSubmit={this.update.bind(this)} method='post'>
          name:<input type='text' name='name' value={user.name}/><br/>
          address:<input type='text' name='address' value={user.address} /><br/>
          phone:<input type='text' name='phone' value={user.phone} /><br/>
          telephone:<input type='text' name='telephone' value={user.telephone} /><br/>
          email:<input type='text' name='email' value={user.email} /><br/>
          <input type='submit' name='update' />
        </form>
      </div>
    )
  }
}
