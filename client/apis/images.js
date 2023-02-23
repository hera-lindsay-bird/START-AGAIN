import request from 'superagent'

export function getPhoto() {
  return request.get('/api/v1/image').then((res) => res.body)
}
