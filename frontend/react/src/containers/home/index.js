import React from 'react'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchDogs } from '../../modules/dogs'
import './home.css'

const Home = props => (
  <div>
    <h1 className="title">Dr Nygaard's Dangerous Dogs Immersion Therapy</h1>
    <div className="card-container">
      <div className="card">
        <div className="card-title"><h2>Welcome dear cynophobe</h2></div>
        <div className="content">
          <p>When you are ready, please begin your immersion therapy</p>
        </div>
        <div className="action">
          <button className="btn" onClick={() => props.beginTherapy()}>Begin</button>
        </div>
      </div>
    </div>
    <div>Current dog count: {props.dogs.length}</div>
    <div>isFetching: {props.isFetching.toString()}</div>
    <button onClick={() => props.beginTherapy()}>get dem dogs</button>
  </div>
)

const mapStateToProps = state => ({
  dogs: state.dogs.dogs,
  isFetching: state.dogs.isFetching,
  fetchingDone: state.dogs.fetchingDone
})

const mapDispatchToProps = dispatch => bindActionCreators({
  beginTherapy: () => push('/therapy'),
  fetchDogs
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))
