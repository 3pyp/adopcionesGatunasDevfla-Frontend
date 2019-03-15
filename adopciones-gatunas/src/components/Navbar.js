import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

import './Navbar.css'

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: true
    }
  }
  render () {
    return (
      <div className="Navbar d-flex flex-column">
        <div className="logo-dashboard justify-content-center mb-5">
          <Link to='/'><FontAwesomeIcon icon={['fab', 'github']} size="4x" id="logo-navbar" color="white" /></Link>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <Link to='/dashboard/cats'><FontAwesomeIcon icon={'cat'} size="2x" className="navbar-btn navbar-btn-active" color="white" /></Link>
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <Link to='/'><FontAwesomeIcon icon={'users'} size="2x" className="navbar-btn" color="white" /></Link>
        </div>
        <div className="mt-auto d-flex justify-content-center">
          <Link to='/'><FontAwesomeIcon icon={'bars'} size="2x" color="white" /></Link>
        </div>
      </div>
    )
  }
}