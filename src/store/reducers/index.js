import { combineReducers } from 'redux'
import loading from './loading'
import invoice from './invoice'
import product from './product'
const reducers = combineReducers({
  loading,
  invoice,
  product,
})
export default reducers
