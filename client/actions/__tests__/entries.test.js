import { fetchEntries, addEntry, SET_ENTRIES } from '../entries'

import { getAllEntries, postEntry } from '../../apis/entries'

jest.spyOn(console, 'error')

jest.mock('../../apis/entries')
const mockEntries = [
  { id: 1, content: 'Hi testing.', date: '2019-05-16', favourite: false },
  {
    id: 2,
    content: 'Hi, no thank you!',
    date: '2019-05-17',
    favourite: false,
  },
]
getAllEntries.mockReturnValue(Promise.resolve(mockEntries))

const mockAddEntry = [{ content: 'Testing add entry.' }]
postEntry.mockReturnValue(Promise.resolve(mockAddEntry))

const fakeDispatch = jest.fn()
beforeEach(() => {
  jest.clearAllMocks()
})

describe('fetchEntries', () => {
  it('dispatches the mock call and returns the correct type', () => {
    const thunkFn = fetchEntries()
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchFirstCallFirstArgument = fakeDispatch.mock.calls[0][0]
      expect(fakeDispatchFirstCallFirstArgument.type).toBe(SET_ENTRIES)
      return null
    })
  })
  it('consoles error', () => {
    getAllEntries.mockImplementation(() =>
      Promise.reject(new Error('Action is not working!'))
    )
    console.error.mockImplementation(() => {})
    return fetchEntries()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Action is not working!')
    })
  })
})

describe('addEntry', () => {
  it('dispatches mock call and returns all entries including new entry', () => {
    const thunkFn = addEntry(mockAddEntry)
    return thunkFn(fakeDispatch).then(() => {
      const fakeDispatchFirstCallFirstArgument = fakeDispatch.mock.calls[0][0]
      expect(typeof fakeDispatchFirstCallFirstArgument).toBe('function')
      return null
    })
  })
  it('consoles error', () => {
    postEntry.mockImplementation(() =>
      Promise.reject(new Error('Action is not working!'))
    )
    console.error.mockImplementation(() => {})
    return addEntry()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Action is not working!')
    })
  })
})
