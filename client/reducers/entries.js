import { SET_ENTRIES } from '../actions/entries'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ENTRIES:
      return payload
    default:
      return state
  }
}

export default reducer
