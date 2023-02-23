const request = require('supertest')
const server = require('../../server')
const db = require('../../db/entries')
const { getAllEntries } = require('../../db/entries')

require('@testing-library/jest-dom')

jest.mock('../../db/entries')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /', () => {
  test('renders all posts', () => {
    db.getAllEntries.mockReturnValue(
      Promise.resolve([
        { id: 1, content: 'Hi testing.', date: '2019-05-16', favourite: false },
        {
          id: 2,
          content: 'Hi, no thank you!',
          date: '2019-05-17',
          favourite: false,
        },
      ])
    )
    return request(server)
      .get('/api/v1/entries')
      .then((res) => {
        expect(res.body).toHaveLength(2)
        expect(res.body[0].content).toBe('Hi testing.')
      })
  })
  it('returns status 500 and consoles error', () => {
    getAllEntries.mockImplementation(() =>
      Promise.reject(new Error('Route is not working.'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/entries')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(console.error).toHaveBeenCalledWith('Route is not working.')
      })
  })
})

describe('POST /', () => {
  test('sends entry data', () => {
    db.createEntries.mockReturnValue(Promise.resolve([1]))
    return request(server)
      .post('/api/v1/entries')
      .then((res) => {
        expect(res.status).toBe(302)
      })
  })
})
