import React, { Component } from 'react'
import axios from 'axios'
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './LoginRegisterView.css'

import Login from '../components/Login'
import LoginPromo from '../components/LoginPromo'
import Register from '../components/Register'

export default class LoginRegisterView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true
    }
  }
  movePromo = () => {
    const pos = document.getElementById('loginPromo').style.left
    if (pos === '0px') {
      document.getElementById('loginPromo').style.left = '50%'
      document.getElementById('logo').style.color = '#fff'
    } else {
      document.getElementById('loginPromo').style.left = '0px'
      document.getElementById('logo').style.color = '#707070'
    }
  }
  render () {
    return (
      <div className="LoginRegisterView container-fluid row col-12">
        <div className="logo">
          <FontAwesomeIcon icon={['fab', 'github']} size="4x" id="logo" color="white"/>
        </div>
        <Login move={this.movePromo} />
        <LoginPromo />
        <Register move={this.movePromo} />
      </div>
    )
  }
}
