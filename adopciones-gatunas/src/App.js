import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import { BrowserRouter, Route } from 'react-router-dom'
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCat, faUsers, faBars, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import {PrivateRoute} from './helpers/PrivateRoute'
import LoginRegisterView from './Views/LoginRegisterView'
import Navbar from './components/Navbar'
import Cats from './Views/Cats'
import ModifyCat from './Views/ModifyCat'

import './App.css'


library.add(fab, faCheckSquare, faCoffee, faCat, faUsers, faBars, faPlusCircle)

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <main>
            <Route exact path='/' component={LoginRegisterView} />
            <div className="container-fluid row col-12">
                <Navbar />
              <div className="Dashboard col">
                <PrivateRoute exact path='/dashboard/cats' component={Cats} />
                <PrivateRoute exact path='/dashboard/modify' component={ModifyCat} />
              </div>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
