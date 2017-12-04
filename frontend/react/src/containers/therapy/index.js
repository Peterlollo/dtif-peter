import React from 'react'
import { Component } from 'react';
import * as helpers from './helpers'
import './therapy.css'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { startPlay, stopPlay } from '../../modules/therapy'

let dogInterval

class therapy extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      inputDogCount: '',
      dogAttacked: false,
      dangerousDog: {
        description: '',
        address: ''
      }
    }
  }

  handleDogAttack (dog) {
    const state = this.state
    state.dogAttacked = true
    state.dangerousDog.description = dog.data.description_of_dog
    state.dangerousDog.address = dog.data.address
    this.setState(state);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.startPlay(this.state.inputDogCount)
  }

  componentWillUpdate(nextProps) {
    if (nextProps.dogCount) {
      this.start(nextProps.dogCount)
    }
  }

  start(dogCount) {
    let svg = helpers.makeSVGField()
    let dataset = helpers.makeDataSet(dogCount, this.props.dogsData)
    let dogs = helpers.makeDogs(svg, dataset)
    let player = helpers.makePlayer(svg)
    let drag = helpers.makeDrag(player)
    player.call(drag)
    dogInterval = setInterval(() => helpers.moveDogs(dogs, dataset, player, this.handleDogAttack.bind(this)), 1000);
  }

  restart() {
    this.props.stopPlay()
    helpers.tearDown()
    clearInterval(dogInterval)
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = Number(e.target.value);
    this.setState(state);
  }

  render() {
    return (
      <div className="therapy-page">
        <div className="header-content">

        {/* Form - only visible when game is stopped */}
          <form className={`start-form ${this.props.playing ? 'playing' : 'not-playing'}`}
            onSubmit={this.handleSubmit}>
            <h1>How many dogs today?</h1>
            <input className="dog-input"
              name='inputDogCount'
              value={this.state.inputDogCount}
              type="number"
              max={this.props.dogsData.length}
              min="1"
              placeholder={`Max is ${this.props.dogsData.length}`}
              onChange={this.onChange}
              required>
            </input>
            <input type="submit" className="btn"></input>
          </form>

          {/* Instructions - only visible during game play */}
          <div className={`instructions ${this.props.playing ? 'playing' : 'not-playing'}`}>
            <h1>Run from the dogs!</h1>
            <h2 >Grab and move the circle with your mouse</h2>
            <button className={`btn restart-btn ${this.props.playing ? 'playing' : 'not-playing'}`}
              onClick={() => this.restart()}>
              Restart
            </button>
          </div>

        </div>
        <h1 id='not-playing' className='collision not-bit'>''</h1>
        <div id="field"></div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  dogsData: state.dogs.dogs,
  playing: state.therapy.playing,
  dogCount: state.therapy.dogCount
})

const mapDispatchToProps = dispatch => bindActionCreators({
  startPlay,
  stopPlay
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(therapy))
