import React, { Component } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Register.css'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: {
        name: '',
        last_name: '',
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
    newBody[id] = value
    this.setState({
      body: newBody
    })
  }
  onBtnSubmit = (e) => {
    e.preventDefault()
    const url = `https://nameless-citadel-76715.herokuapp.com/api/v1/create/user`
    const requestBody = this.state.body
    axios.post(url, requestBody)
      .then((result) => {
        this.setState({
          body: {
            name: '',
            last_name: '',
            email: '',
            password: ''
          },
          error: false,
          errorMessage: ''
        })
        alert('El usuario ha sido creado, ahora puedes ingresar')
        this.props.move()
      }).catch((err) => {
        this.setState({
          error: true,
          errorMessage: `${err.response.data.message}`
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
      <div className="Register col-6 pt-5 pl-5 pr-5 d-flex flex-column">
        <div className="mt-auto mb-auto">
          <form className="col-12 col-md-8 offset-md-2" onSubmit={this.onBtnSubmit}>
            <input
              id="name"
              className="col-12 mt-5 form-control"
              type="text"
              placeholder="Primer Nombre"
              onChange={this.onInputChange}
              value={this.state.body.name}
            />
            <input
              id="last_name"
              className="col-12 mt-5 form-control"
              type="text"
              placeholder="Segundo Nombre"
              onChange={this.onInputChange}
              value={this.state.body.last_name}
            />
            <input
              id="email"
              className="col-12 mt-5 form-control"
              type="email"
              placeholder="Correo Eletrónico"
              onChange={this.onInputChange}
              value={this.state.body.email}
            />
            <input
              id="password"
              className="col-12 mt-5 form-control"
              type="password"
              placeholder="Contraseña"
              onChange={this.onInputChange}
              value={this.state.body.password}
            />
            {this.renderError()}
            <button
              type="submit"
              className="btn cst-btn mt-5 col-12 col-md-6 offset-md-3">
              Regístrarse</button>
          </form>
        </div>
        <div className="mt-auto d-flex justify-content-center">
          <button type="button" className="btn cst-btn-register-here" onClick={this.props.move}>
            Iniciar Sesión
        </button>
        </div>
      </div>
    )
  }
}
