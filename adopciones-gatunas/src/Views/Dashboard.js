import React, { Component } from 'react'
import Navbar from '../components/Navbar'

import './Dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard container-fluid row col-12">
        <Navbar/>
      </div>
    )
  }
}
