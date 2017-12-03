import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Home from './containers/home'
import Therapy from './containers/therapy'
import DogMap from './containers/dogMap'

const App = () => (
  <div className="App">

    <div className="App-header">
      <Link to="/">Home</Link>
      <Link to="/therapy">Therapy</Link>
      <Link to="/map">Map</Link>
      <h2>Dangerous Dogs</h2>
    </div>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/therapy" component={Therapy} />
      <Route exact path="/map" component={DogMap} />
    </main>

  </div>
)

export default App;