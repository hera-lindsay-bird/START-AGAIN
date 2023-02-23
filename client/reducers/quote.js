import { SET_QUOTE } from '../actions/quote'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_QUOTE:
      return payload
    default:
      return state
  }
}

export default reducer
