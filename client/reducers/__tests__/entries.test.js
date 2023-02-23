import reducer from '../entries'
import { setEntries } from '../../actions/entries'

describe('Journal Entries reducer', () => {
  test('recieves updates', () => {
    const initialState = []
    const exampleEntry = [
      {
        id: 1,
        content: 'Hi testing.',
        date: '2019-05-16',
        favourite: false,
      },
    ]
    const action = setEntries(exampleEntry)
    const newState = reducer(initialState, action)
    expect(newState).toEqual(exampleEntry)
  })
})
