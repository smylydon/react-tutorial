import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import {Navbar} from './components/navbar';
import {Jumbotron} from './components/jumbotron';

import {Home} from './components/home';
import {About} from './components/about';
import {Contact} from './components/contact';


ReactDom.render(
  <div>
    <Navbar />
  </div>,
  document.getElementById('react-navbar')
);

ReactDom.render(
  <div>
    <Jumbotron />
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>

  </div>,
  document.getElementById('react-container')
);
