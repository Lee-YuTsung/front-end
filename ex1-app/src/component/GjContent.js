import React, { Component } from 'react'
import Header from './header/Header'
import Navigater from './navigater/Navigater'
import Content from './content/Content'
import Footer from './footer/Footer'

export default class GjContent extends Component {
  render() {
    return (
      <div>
        <div className='header'><Header/></div>
        <div className='navigater'><Navigater/></div>
        <div className='content'><Content/></div>
        <div className='footer'><Footer/></div>
      </div>
    )
  }
}
