import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './containers/home'
import About from './containers/about'
import axios from 'axios';

const App = () => (
  <div className="App">

    <div className="App-header">
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <h2>Dangerous Dogs</h2>
    </div>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>

  </div>
)

export default App;