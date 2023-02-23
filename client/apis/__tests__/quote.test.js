import nock from 'nock'
import { getQuote } from '../quote'

describe('quote', () => {
  test('that the quote gets got', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/quote')
      .reply(200, { id: 5, text: 'bananas', author_id: 6 })
    return getQuote().then((res) => {
      expect(res.text).toContain('bananas')
      expect(scope.isDone()).toBe(true)
    })
  })
})
