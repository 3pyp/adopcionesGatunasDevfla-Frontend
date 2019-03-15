import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import CatsCard from '../components/CatsCard'

import './Cats.css'

export default class Cats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [],
      token: sessionStorage.getItem("token"),
      error: '',
      errorMessage: 'Error'
    }
  }
  componentDidMount () {
    const URL = `https://nameless-citadel-76715.herokuapp.com/api/v1/all/cats`
    axios.get(URL, { headers: { 'Authorization': `tk ${this.state.token}` } })
      .then((result) => {
        this.setState({ cats: result.data })
      }).catch((err) => {
        this.setState({
          error: true,
          errorMessage: `${err.response.data.message}`
        })
      });
  }
  renderCats = () => {
    return this.state.cats.length === 0 && this.state.error === false
      ? <h1>Cargando...</h1>
      : this.state.cats.map((cat, i) =>
        <CatsCard key={i}
          cat={cat}
          match={this.props}
          token={this.state.token}
        />)
  }
  renderError = () => {
    return this.state.error === true
      ? <div className="alert mt-4 mb-1 alert-danger" role="alert">{this.state.errorMessage}</div>
      : true
  }
  render () {
    console.log(this.props)
    return (
      <div className="Cats col px-5">
        <div className="addCat">
          <FontAwesomeIcon icon={'plus-circle'} size="4x" id="addCatIcon" color="black" />
        </div>
        <div className="title col-12 pt-4 px-0">
          <h1>Gatos</h1>
        </div>
        <div className="row col-12 pt-3">
          <div className="">
            <button className="btn cats-btn cats-btn-active">
              Todos los gatos
            </button>
          </div>
          <div className="">
            <button className="btn cats-btn">
              Gatos activos
            </button>
          </div>
          <div className="">
            <button className="btn cats-btn">
              H
            </button>
          </div>
          <div className="">
            <button className="btn cats-btn">
              M
            </button>
          </div>
        </div>
        <div className="col my-4 no-gutters px-0">
          <hr />
        </div>
        <div className="row col px-0">
          {this.renderCats()}
          {this.renderError()}
        </div>
        
      </div>
    )
  }
}
