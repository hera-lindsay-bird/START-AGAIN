const connection = require('./connection')

function createEntries(post, db = connection) {
  return db('journal').insert(post)
}

function getAllEntries(db = connection) {
  return db('journal').select()
}

module.exports = {
  createEntries,
  getAllEntries,
}
