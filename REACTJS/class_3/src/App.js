import React, { Component } from 'react';
import './App.css';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { SignupComponent } from './components/signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <HomeComponent />
        <LoginComponent />
        <SignupComponent />
      </div>
    );
  }
}

export default App;
