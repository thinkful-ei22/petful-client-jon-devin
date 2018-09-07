import { combineReducers } from 'redux'
import dogReducer from './dogs'
import catReducer from './cats'

export default combineReducers({
  dog: dogReducer,
  cat: catReducer
})