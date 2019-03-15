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
      errorMessage: 'Error',
      cat: {
        picture: '',
        age: Number,
        gender: '',
        first_owner:{
          name: '',
          last_name: '',
          celphone: ''
        }
      }
    }
  }
  onCatInputCatChange = (e) => {
    const { id, value } = e.target
    const newCat = { ...this.state.cat }
    newCat[id] = value
    this.setState({
      cat: newCat
    })
  }
  onFirstOwnerInputChange = (e) => {
    const { id, value } = e.target
    const newCat = { ...this.state.cat }
    const firstOwner = { ...this.state.cat.first_owner }
    firstOwner[id] = value
    newCat.first_owner = firstOwner
    this.setState({
      cat: newCat
    })
  }
  onBtnSubmitCreate = () => {
    const url = `https://nameless-citadel-76715.herokuapp.com/api/v1/create/cat`
    const requestBody = this.state.cat
    axios.post(url, requestBody, { headers: { 'Authorization': `tk ${this.state.token}` } })
      .then((result) => {
        window.location.reload()
      }).catch((err) => {
        console.log(err.response.data)
      });
  }
  componentDidMount () {
    const URL = `https://nameless-citadel-76715.herokuapp.com/api/v1/active/cats`
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
  getActiveCats = (e) => {
    const URL = `https://nameless-citadel-76715.herokuapp.com/api/v1/active/cats`
    axios.get(URL, { headers: { 'Authorization': `tk ${this.state.token}` } })
      .then((result) => {
        this.setState({ cats: result.data })
      }).catch((err) => {
        this.setState({
          error: true,
          errorMessage: `${err.response.data.message}`
        })
      });
      document.getElementById("allCats").className = "btn cats-btn"
      document.getElementById("activeCats").className = "btn cats-btn cats-btn-active"
  }
  getAllCats = (e) => {
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
      document.getElementById("allCats").className = "btn cats-btn cats-btn-active"
      document.getElementById("activeCats").className = "btn cats-btn"
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
        <button type="button" className="btn addCat" data-toggle="modal" data-target="#exampleModalCenter">
          <FontAwesomeIcon icon={'plus-circle'} size="4x" id="addCatIcon" color="black" />
        </button>
        <div className="title col-12 pt-4 px-0">
          <h1>Gatos</h1>
        </div>
        <div className="row col-12 pt-3">
          <div className="">
            <button id="allCats" className="btn cats-btn" onClick={this.getAllCats}>
              Todos los gatos
            </button>
          </div>
          <div className="">
            <button id="activeCats" className="btn cats-btn cats-btn-active" onClick={this.getActiveCats}>
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
        <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="adoptModal" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="adoptModal">Datos del adoptante</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <div className="row col-12 no-gutters pr-4">
                  <div className="col-12 my-4">
                    <h5>Datos del gato</h5>
                  </div>
                  <div className="col-12">
                    <label>Foto</label>
                    <input
                      id="picture"
                      className="form-control"
                      type="text"
                      placeholder="Foto"
                      onChange={this.onCatInputCatChange}
                      value={this.state.cat.picture}
                      disabled={this.state.disabled}
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <label>Edad</label>
                    <input
                      id="age"
                      className="form-control"
                      type="number"
                      placeholder="Edad"
                      onChange={this.onCatInputCatChange}
                      value={this.state.cat.age}
                      disabled={this.state.disabled}
                    />
                  </div>
                  <div className="col-12 mt-4 ">
                    <label>Género</label>
                    <select
                      id="gender"
                      className="form-control"
                      placeholder="Género"
                      onChange={this.onCatInputCatChange}
                      value={this.state.cat.gender}
                      disabled={this.state.disabled}
                    >
                      <option>F</option>
                      <option>M</option>
                    </select>
                  </div>
                </div>
                <div className="row col-12 no-gutters pl-4">
                  <div className="col-12 my-4">
                    <h5>Datos del primer dueño</h5>
                  </div>
                  <div className="col-12 col-md-6 pr-md-3">
                    <label>Primer Nombre</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Primer nombre"
                      onChange={this.onFirstOwnerInputChange}
                      value={this.state.cat.first_owner.name}
                      disabled={this.state.disabled}
                    />
                  </div>
                  <div className="col-12 col-md-6 pl-md-3">
                    <label>Segundo Nombre</label>
                    <input
                      id="last_name"
                      type="text"
                      className="form-control"
                      placeholder="Segundo nombre"
                      onChange={this.onFirstOwnerInputChange}
                      value={this.state.cat.first_owner.last_name}
                      disabled={this.state.disabled}
                    />
                  </div>
                  <div className="col-12 mt-4">
                    <label>Teléfono</label>
                    <input
                      id="celphone"
                      type="number"
                      className="form-control"
                      placeholder="Teléfono"
                      onChange={this.onFirstOwnerInputChange}
                      value={this.state.cat.first_owner.celphone}
                      disabled={this.state.disabled}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-cancel" data-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-success" onClick={this.onBtnSubmitCreate}>Crear</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
