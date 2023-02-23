import { combineReducers } from 'redux'

import quote from './quote'
import entries from './entries'

export default combineReducers({
  quote,
  entries,
})
