import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Popper from 'popper.js';
import { BrowserRouter, Route } from 'react-router-dom'
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faCat, faUsers } from '@fortawesome/free-solid-svg-icons'

import LoginRegisterView from './Views/LoginRegisterView'
import Dashboard from './Views/Dashboard'

library.add(fab, faCheckSquare, faCoffee, faCat, faUsers)

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <main>
            <Route exact path='/' component={LoginRegisterView} />
            <Route exact path='/dashboard' component={Dashboard} />
            {/* <Route exact path='/register' component={Register} />
            <Route exact path='/user/:uid' component={ReadUser} /> */}
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
