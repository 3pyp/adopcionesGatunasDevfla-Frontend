import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Cats from '../components/Cats'

import './Dashboard.css'

export default class Dashboard extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container-fluid row col-12">
          <Navbar />
          <main className="Dashboard col">
            <Route exact path='/dashboard/cats' component={Cats} />
            {/* <div className="card col-4">
              <img src="https://vignette.wikia.nocookie.net/dragonball/images/5/57/Goku_DB_Artwork.png/revision/latest?cb=20160802220130&path-prefix=es" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div> */}
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
