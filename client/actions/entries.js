import { getAllEntries, postEntry } from '../apis/entries'

export const SET_ENTRIES = 'SET_ENTRIES'

export function setEntries(entries) {
  return {
    type: SET_ENTRIES,
    payload: entries,
  }
}

export function fetchEntries() {
  return (dispatch) => {
    return getAllEntries()
      .then((entries) => {
        dispatch(setEntries(entries))
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}

export function addEntry(formData) {
  return (dispatch) => {
    return postEntry(formData)
      .then(() => {
        dispatch(fetchEntries())
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
}
