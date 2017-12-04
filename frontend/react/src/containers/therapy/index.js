import React from 'react'
import { Component } from 'react';
import * as helpers from './helpers'
import './therapy.css'

class therapy extends Component {

  constructor(props) {
    super(props)
    this.state = {instructionClasses: 'instructions'}
  }

  componentDidMount() {
    let svg = helpers.makeSVGField()
    let dataset = helpers.makeDataSet([])
    let dogs = helpers.makeDogs(svg, dataset)
    setInterval(function() { helpers.moveDogs(dogs, dataset) }, 1000);
    setTimeout(function() { this.setState({instructionClasses: 'instructions show'}); }.bind(this), 1500);
  }

  render() {
    return (
      <div>
        <h1>Run from the dogs!</h1>
        <h2 className={this.state.instructionClasses}>Grab and move the red circle with your mouse</h2>
        <div id="field"></div>
      </div>
    )
  }
}

export default therapy;
