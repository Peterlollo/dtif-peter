import React from 'react'
import { Component } from 'react';
import * as helpers from './helpers'

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
    setTimeout(function() { this.setState({instructionClasses: 'instructions show'}); }.bind(this), 1000);
  }

  render() {
    return (
      <div>
        <h1>Dear Cynophobe</h1>
        <p className={this.state.instructionClasses}>Run from the dogs!</p>
        <div id="field"></div>
      </div>
    )
  }
}

export default therapy;