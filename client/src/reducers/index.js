import { combineReducers } from 'redux'
import {signInReducers, filesDashboardReducers} from './reducers'
export default combineReducers({
  signInReducers,
  filesDashboardReducers,
})