import React, { Component } from 'react'
import Hander from './component/Hander'
import Footer from './component/Footer'
import Member from './component/member/Member';

export default class App extends Component {

  render() {
    return (
      <div class='container'>
        <div className='header'><Hander /></div>
        <div className='content'><Member/></div>
        <div className='footer'><Footer /></div>
      </div>
      
    )
  }
}

