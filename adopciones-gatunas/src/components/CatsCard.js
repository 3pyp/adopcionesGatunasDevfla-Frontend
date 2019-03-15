import React, { Component } from 'react'

import './CatsCard.css'

export default class CatsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="card col-3 cats-card">
        <img src={this.props.cat.picture} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Edad: {this.props.cat.age} meses</h5>
          <p className="card-text">Genero: {this.props.cat.gender}</p>
        </div>
      </div>
    )
  }
}
