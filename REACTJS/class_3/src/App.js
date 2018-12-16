import React, { Component } from 'react';
import './App.css';
import { HomeComponent } from './components/home';
import { LoginComponent } from './components/login';
import { SignupComponent } from './components/signup';
import { BrowserRouter as Router, Route } from "react-router-dom";

const BasicRouting = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/login/" component={LoginComponent} />
        <Route path="/signup/" component={SignupComponent} />
      </div>
    </Router>
  )
}
export default BasicRouting;
