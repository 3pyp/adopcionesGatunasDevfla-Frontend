import React, { Component } from 'react'
import axios from 'axios'

import './Login.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: {
        email: '',
        password: ''
      },
      error: false,
      errorMessage: 'Error'
    }
  }
  onInputChange = (e) => {
    const { id, value } = e.target
    const newBody = { ...this.state.body }
    newBody[id] =  value
    this.setState({
      body: newBody
    })
  }
  onBtnSubmit = (e) => {
    e.preventDefault()
    const url = `https://nameless-citadel-76715.herokuapp.com/api/v1/login/user`
    const requestBody = this.state.body
    axios.post(url, requestBody)
      .then((result) => {
        this.props.history.push(`/dashboard`)
      }).catch((err) => {
        this.setState({
          error: true,
          errorMessage: `${err}`
        })
      });
  }
  renderError = () => {
    return this.state.error === true
      ? <div className="alert mt-4 mb-1 alert-danger" role="alert">{this.state.errorMessage}</div>
      : true
    }

  render () {
    return (
      <div className="Login col-6 pt-5 pl-5 pr-5 d-flex flex-column">
        <div className="mt-auto mb-auto">
          <form className="col-12 col-md-8 offset-md-2" onSubmit={this.onBtnSubmit}>
            <input
              id="email"
              className="col-12 mt-5 form-control"
              type="email"
              placeholder="Correo Eletrónico"
              onChange={this.onInputChange}
              value={this.state.body.email}
              required
            />
            <input
              id="password"
              className="col-12 mt-5 mb-2 form-control"
              type="password"
              placeholder="Contraseña"
              onChange={this.onInputChange}
              value={this.state.body.password}
              required
            />
            {this.renderError()}
            <button
              type="submit"
              className="btn cst-btn mt-4 col-12 col-md-6 offset-md-3">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className="mt-auto d-flex justify-content-center">
          <button id="registerBtn" type="button" className="btn cst-btn-register-here" onClick={this.props.move}>
            Regístrate Aquí
        </button>
        </div>
      </div>
    )
  }
}
