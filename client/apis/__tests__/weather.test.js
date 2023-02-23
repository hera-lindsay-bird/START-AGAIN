import nock from 'nock'
// const nock = require('nock')
import { getWeather } from '../weather.js'

describe('Get weather details', () => {
  test('Gets weather details from the api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/weather')
      .reply(200, {
        data: {
          name: 'Wellington',
          weather: [{ description: 'cloudy' }],
        },
      })
    return getWeather().then((res) => {
      expect(res.data.name).toContain('Wellington')
      expect(scope.isDone()).toBe(true)
    })
  })
})
