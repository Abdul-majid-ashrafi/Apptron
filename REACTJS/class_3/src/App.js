import React, { Component } from 'react';
import './App.css';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { SignupComponent } from './components/signup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <h1>This App          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login/">Login</Link>
              </li>
              <li>
                <Link to="/signup/">Signup</Link>
              </li>
            </ul>
          </nav> */}

          <Route path="/" exact component={HomeComponent} />
          <Route path="/login/" component={LoginComponent} />
          <Route path="/signup/" component={SignupComponent} />
        </div>
      </Router>
    );
  }
}

export default App;
