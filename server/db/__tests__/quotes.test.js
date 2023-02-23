const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../../db/quote.js')
const dbquote = require('../../db/data/quotes.json')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getQuote', () => {
  it('returns the quotes array', () => {
    return db.getQuote(testDb).then((quote) => {
      expect(quote).toHaveLength(dbquote.length)
      return null
    })
  })
  it('quote shows matched author name', () => {
    return db.getQuote(testDb).then((quote) => {
      expect(quote).toContainEqual({
        id: 3,
        text: 'The things you make war with take you over.',
        name: 'Achaan Chah',
        author_id: 3,
      })
    })
  })
})
