const request = require('supertest')
const server = require('../../server')
const db = require('../../db/quote')

jest.mock('../../db/quote')
jest.spyOn(console, 'error').mockImplementation(() => {})

beforeEach(() => {
  jest.resetAllMocks()
})

describe('get /api/v1/quote', () => {
  test('returns quote in json', () => {
    db.getQuote.mockReturnValue(
      Promise.resolve([{ id: 3, text: 'apples', author_id: 2 }])
    )
    return request(server)
      .get('/api/v1/quote')
      .then((res) => {
        expect(res.body.id).toBe(3)
        expect(res.status).toBe(200)
      })
  })
  test('returns 500 and logs error message when error', () => {
    db.getQuote.mockImplementation(() => Promise.reject('Something went wrong'))
    return request(server)
      .get('/api/v1/quote')
      .then((res) => {
        expect(res.status).toBe(500)
      })
  })
})
