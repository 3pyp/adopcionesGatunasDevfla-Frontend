import React, { Component } from 'react'
import './Cats.css'

export default class Cats extends Component {
  render () {
    return (
      <div className="Cats col">
        <div className="title col-12 pt-4 px-0">
          <h1>Cats</h1>
        </div>
        <div className="row col-12 pt-3">
          <div className="">
            <button class="btn cats-btn">
              All Cats
      </button>
          </div>
          <div className="">
            <button class="btn cats-btn">
              Active Cats
      </button>
          </div>
          <div className="">
            <button class="btn cats-btn">
              H
      </button>
          </div>
          <div className="">
            <button class="btn cats-btn">
              M
            </button>
          </div>
        </div>
      </div>
    )
  }
}
