import { combineReducers } from 'redux'
import loading from './loading'
import invoice from './invoice'
const reducers = combineReducers({
  loading,
  invoice,
})
export default reducers
