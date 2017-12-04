import React from 'react'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchDogs } from '../../modules/dogs'
import './home.css'

const contentText = (props) => {
  if (props.fetchSuccess) {
    return 'When you are ready, please begin your immersion therapy'
  } else {
    return 'Terribly sorry, the dogs are missing.'
  }
}

const Home = props => {

  let text = contentText(props)
  let success = props.fetchSuccess

  return (
    <div>
      <h1 className="title">Dr Nygaard's Dangerous Dogs Immersion Therapy</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-title"><h2>Welcome dear cynophobe</h2></div>
          <div className="content">
            <p>{text}</p>
          </div>
          <div className="action">
            <button className={`btn ${success ? 'show' : 'hide'}`} onClick={() => props.beginTherapy()}>Begin</button>
            <button className={`btn ${success ? 'hide' : 'show'}`} onClick={() => props.fetchDogs()}>Fetch the hounds</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  fetchSuccess: state.dogs.fetchSuccess,
  fetchError: state.dogs.fetchError
})

const mapDispatchToProps = dispatch => bindActionCreators({
  beginTherapy: () => push('/therapy'),
  fetchDogs
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))
