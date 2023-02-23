require('dotenv').config()

import request from 'supertest'
import server from '../../server'
import nock from 'nock'

jest.spyOn(console, 'error')

beforeEach(() => jest.clearAllMocks())

describe('get /api/v1/weather', () => {
  test('returns weather for Wellington', () => {
    const apiKey = process.env.OPEN_WEATHER_KEY
    const scope = nock(`https://api.openweathermap.org/data/2.5`)
      .get(`/weather?lat=-41.2924&lon=174.7787&appid=${apiKey}&units=metric`)
      .reply(200, {
        data: {
          name: 'Wellington',
          weather: [{ description: 'cloudy' }],
        },
      })
    return request(server)
      .get('/api/v1/weather')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.data.name).toBe('Wellington')
        scope.done()
      })
  })
  test('returns 500 and sends Error Message', () => {
    console.error.mockImplementation(() => {})
    const apiKey = process.env.OPEN_WEATHER_KEY
    const scope = nock(`https://api.openweathermap.org/data/2.5`)
      .get(`/weather?lat=-41.2924&lon=174.7787&appid=${apiKey}&units=metric`)
      .replyWithError({ message: 'Oh no... Not found.' })
    return request(server)
      .get('/api/v1/weather')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(scope.isDone()).toBe(true)
        expect(res.body.message).toBe('Oh no... Not found.')
      })
  })
})
