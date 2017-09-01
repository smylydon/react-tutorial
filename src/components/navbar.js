import React from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';

export class Navbar extends React.Component {
  render() {
    return (
      <Router>
      <div className="bs-component">
                   <nav className="navbar navbar-inverse">
                     <div className="container-fluid">
                       <div className="navbar-header">
                         <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                           <span className="sr-only">Toggle navigation</span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                           <span className="icon-bar"></span>
                         </button>
                         <Link to="/" className="navbar-brand">ReactJS</Link>
                       </div>

                       <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                         <ul className="nav navbar-nav">
                           <li>
                            <Link to="/" >Home</Link>
                           </li>
                           <li>
                           <Link to="/about">About</Link>
                           </li>
                           <li>
                           <Link to="/contact">Contact</Link>
                           </li>
                         </ul>

                         <ul className="nav navbar-nav navbar-right">
                           <li><a href="#">Link</a></li>
                         </ul>
                       </div>
                     </div>
                   </nav>
                 </div>
                 </Router>
  );
  }
}
