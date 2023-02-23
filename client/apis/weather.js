import request from 'superagent'

export function getWeather() {
  return request.get('/api/v1/weather').then((res) => {
    return res.body
  })
}
