import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dogs from './dogs'

export default combineReducers({
  routing: routerReducer,
  dogs
})