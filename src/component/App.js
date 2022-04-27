import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link to="/home" class="nav-link active">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/about" class="nav-link">About Us</Link>
                  </li>
                  <li class="nav-item">
                    <Link to=" " class="nav-link">Back</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
          <Routes>
                 <Route exact path='/home' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
          </Routes>    
      </Router>
   );
  }
}


export default App;
