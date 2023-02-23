import reducer from '../quote'
import { setQuote } from '../../actions/quote'

describe('quote reducer', () => {
  it('set quote action', () => {
    const initialState = [{ id: 5, text: 'bananas', author_id: 6 }]
    const action = setQuote({ id: 5, text: 'bananas', author_id: 6 })
    const newState = reducer(initialState, action)
    expect(newState.text).toContain('bananas')
  })
})
