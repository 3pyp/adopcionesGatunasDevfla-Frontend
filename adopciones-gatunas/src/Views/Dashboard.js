import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


import Cats from '../components/Cats'
import ModifyCat from '../Views/ModifyCat'

import './Dashboard.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      test: ''
    }
  }
  render () {
    return (
      <div className="container-fluid row col-12">
        <main className="Dashboard col">
          <Cats/>
          <ModifyCat/>
        </main>
      </div>
    )
  }
}
