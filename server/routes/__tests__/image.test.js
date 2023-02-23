require('dotenv').config()

import request from 'supertest'
import server from '../../server'
import nock from 'nock'

jest.spyOn(console, 'error')

const apiKey = process.env.API_KEY

beforeEach(() => jest.clearAllMocks())

describe('Get photo', () => {
  it('gets a random photo from the API', () => {
    const scope = nock('https://api.unsplash.com')
      .get(
        `/photos/random/?orientation=landscape&topics=6sMVjTLSkeQ&client_id=${apiKey}`
      )
      .reply(200, { id: 'H8V-DOtzL5o', topics: [{ title: 'Nature' }] })
    return request(server)
      .get('/api/v1/image')
      .then((res) => {
        expect(res.body.topics[0].title).toBe('Nature')
        expect(scope.isDone()).toBe(true)
      })
  })
  it('responds with an error', () => {
    console.error.mockImplementation(() => {})
    const scope = nock('https://api.unsplash.com')
      .get(
        `/photos/random/?orientation=landscape&topics=6sMVjTLSkeQ&client_id=${apiKey}`
      )
      .replyWithError({ message: 'Something went wrong' })
    return request(server)
      .get('/api/v1/image')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(scope.isDone()).toBe(true)
        expect(res.body.message).toBe('Something went wrong')
      })
  })
})
