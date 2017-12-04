import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import Home from './containers/home'
import Therapy from './containers/therapy'
import DogMap from './containers/dogMap'
import Header from './components/header'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchDogs } from './modules/dogs'

class App extends Component {
  
  constructor(props) {
    super(props)
  }

  componentWillMount (props) {
    this.props.fetchDogs()
  }

  render () {
    return (
      <div className="App">
        <Header></Header>
        <div className='container'>
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/therapy" component={Therapy} />
            <Route exact path="/map" component={DogMap} />
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchDogs
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))
