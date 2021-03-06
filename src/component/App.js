import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import FlightInterface from "./FlightInterface";
import Signin from './Signin';
import Login from './Login';
import './App.css';

import Airplanes from './Airplanes/Airplanes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/home" className="nav-link active">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/FlightInterface" className="nav-link">Flight Information</Link>
                  </li>
                  <li className="nav-item">
                  </li>                  
                  <li className="nav-item">
                    <Link to="/airplanes" className="nav-link">Airplanes</Link>
                  </li>
                  <li className="nav-item">
                    <Link to=" " className="nav-link">Back</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
          <Routes>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/FlightInterface' element={< FlightInterface />}></Route>
                 <Route exact path='/login' element={< Login />}></Route>
                 <Route exact path='/signin' element={< Signin />}></Route>
                 <Route exact path='/airplanes' element={< Airplanes />}></Route>
          </Routes>
      </Router>
   );
  }
}

export default App;
