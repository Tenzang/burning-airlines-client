import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Signin from './Signin';
import Login from './Login';

import Reservations from './Reservations/Reservations';

const Home = (props) => {
  return (
      <div>
        <h1>Sign in or create your account</h1>
        <Link to="/login" className="btn btn-primary">Log in</Link>
        <Link to="/signin" className="btn btn-primary">Sign in</Link>

        <Reservations />
      </div>
  );
}

export default Home;