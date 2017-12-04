import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import dogs from './dogs'
import therapy from './therapy'

export default combineReducers({
  routing: routerReducer,
  dogs,
  therapy
})