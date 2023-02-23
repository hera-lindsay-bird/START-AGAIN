import { getQuote } from '../apis/quote'
export const SET_QUOTE = 'SET_QUOTE'

export function setQuote(quote) {
  return {
    type: SET_QUOTE,
    payload: quote,
  }
}

export function fetchQuote() {
  return (dispatch) => {
    return getQuote()
      .then((quote) => {
        dispatch(setQuote(quote))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}
