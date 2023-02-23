const connection = require('./connection')

function getQuote(db = connection) {
  return db('quotes').join('authors', 'authors.id', 'author_id').select()
}

module.exports = {
  getQuote,
}
