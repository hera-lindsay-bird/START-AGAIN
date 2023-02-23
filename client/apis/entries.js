import request from 'superagent'

const rootUrl = '/api/v1/entries'

export function postEntry(entry) {
  return request
    .post(rootUrl)
    .send(entry)
    .then((res) => res.body)
}

export function getAllEntries() {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}
