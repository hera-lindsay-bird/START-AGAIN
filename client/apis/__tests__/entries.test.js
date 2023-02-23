import nock from 'nock'

import { getAllEntries, postEntry } from '../entries'

describe('Entries Api Client', () => {
  test('sends fake data to api and returns the correct information', () => {
    const scope = nock('http://localhost').get('/api/v1/entries').reply(200, {
      id: 1,
      content: 'Hi testing.',
      date: '2019-05-16',
      favourite: false,
    })
    return getAllEntries().then((res) => {
      expect(res.content).toContain('Hi testing.')
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('Posting new entry to Api Client', () => {
  test('posts new entry', () => {
    const scope = nock('http://localhost').post('/api/v1/entries').reply(200, {
      content: 'Hi testing create post.',
    })
    return postEntry().then((res) => {
      expect(res.content).toContain('Hi testing create post.')
      expect(scope.isDone()).toBe(true)
    })
  })
})
