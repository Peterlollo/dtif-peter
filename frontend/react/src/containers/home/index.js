import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  fetchDogs
} from '../../modules/dogs'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <div>Current dog count: {props.dogs.length}</div>
    <div>isFetching: {props.isFetching.toString()}</div>
    <button onClick={() => props.fetchDogs()}>get dem dogs</button>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
)

const mapStateToProps = state => ({
  dogs: state.dogs.dogs,
  isFetching: state.dogs.isFetching,
  fetchingDone: state.dogs.fetchingDone
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us'),
  fetchDogs
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)