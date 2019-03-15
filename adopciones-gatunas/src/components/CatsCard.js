import React, { Component } from 'react'

import './CatsCard.css'

export default class CatsCard extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  catDetails = () => {
    const url = `/dashboard/modify/${this.props.cat._id}`
    this.props.match.history.push(url)
  }
  render () {
    return (
      <div className="CatsCard col-3">
        <div className="card cst-cats-card" onClick={this.catDetails}>
          <img src={this.props.cat.picture} className="card-img-top" alt="Gato"></img>
          <div className="card-body">
            <h5 className="card-title">Edad: {this.props.cat.age} meses</h5>
            <p className="card-text">Genero: {this.props.cat.gender}</p>
          </div>
        </div>
      </div>
    )
  }
}
