import request from 'superagent'

const rootUrl = '/api/v1'

export function getQuote() {
  return request.get(rootUrl + '/quote').then((res) => {
    return res.body
  })
}
