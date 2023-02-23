const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../../db/entries')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getAllEntries', () => {
  test('returns an array of the correct length from seeds', () => {
    return db.getAllEntries(testDb).then((entries) => {
      expect(entries).toHaveLength(4)
      expect(entries[0].content).toContain('You can get away with a lot')
      return null
    })
  })
})

describe('createEntries', () => {
  test('returns id of created post adds to db', () => {
    // const id = Journal.getId()
    return db
      .createEntries({ id: 5, content: 'My entry' }, testDb)
      .then((res) => {
        expect(res[0]).toBe(5)
        return db.getAllEntries(testDb)
      })
      .then((entries) => {
        expect(entries).toHaveLength(5)
        expect(entries[4].content).toContain('My entry')
      })
  })
})
