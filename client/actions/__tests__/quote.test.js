import { fetchQuote, SET_QUOTE } from '../quote'
import { getQuote } from '../../apis/quote'
jest.spyOn(console, 'error')
jest.mock('../../apis/quote')

const mockQuote = [{ id: 5, text: 'bananas', author_id: 6 }]

getQuote.mockReturnValue(Promise.resolve(mockQuote))

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchQuote', () => {
  it('dispatches the mock call and returns correct type', () => {
    const thunkFn = fetchQuote()

    return thunkFn(fakeDispatch).then(() => {
      const action = fakeDispatch.mock.calls[0][0]
      expect(action.type).toBe(SET_QUOTE)
    })
  })
  it('consoles error', () => {
    getQuote.mockImplementation(() =>
      Promise.reject(new Error('something wrong with your action'))
    )
    console.error.mockImplementation(() => {})
    return fetchQuote()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith(
        'something wrong with your action'
      )
    })
  })
})
