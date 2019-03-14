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
      document.getElementById('logo-login').style.color = '#fff'
    } else {
      document.getElementById('loginPromo').style.left = '0px'
      document.getElementById('logo-login').style.color = '#707070'
    }
  }
  render () {
    return (
      <div className="LoginRegisterView container-fluid row col-12">
        <div className="logo-login">
          <FontAwesomeIcon icon={['fab', 'github']} size="4x" id="logo-login" color="white" />
        </div>
        <Login move={this.movePromo} history={this.props.history} />
        <LoginPromo />
        <Register move={this.movePromo} />
      </div>
    )
  }
}
