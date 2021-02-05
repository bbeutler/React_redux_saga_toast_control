import { combineReducers } from 'redux-immutable'
import { routerReducer } from 'react-router-redux'
import toast from './toast'

const rootReducer = combineReducers({
  router: routerReducer,
  toast,
})

export default rootReducer
