import React, { Component } from 'react'

import './LoginPromo.css'

export default class LoginPromo extends Component {
  render() {
    return (
      <div id="loginPromo" className="LoginPromo row col-6">
        <div className="promo-insta col-md-7 ml-auto mr-auto mt-auto mb-auto ">
          <img className="img-fluid" src={require('../imgs/promo-insta.png')} alt="Promo-instagram"/>
        </div>
        <div className="promo-cat col-md-7 offset-md-4">
          <img className="img-fluid" src={require('../imgs/promo-cat.png')} alt="Promo-instagram"/>
        </div>
      </div>
    )
  }
}
