import nock from 'nock'

import { getPhoto } from '../images'

describe('Get photo', () => {
  it('gets a random photo from the API', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/image')
      .reply(200, { id: 'H8V-DOtzL5o', topics: [{ title: 'Nature' }] })
    return getPhoto().then((photo) => {
      expect(photo.topics[0].title).toBe('Nature')
      expect(scope.isDone()).toBe(true)
    })
  })
})
