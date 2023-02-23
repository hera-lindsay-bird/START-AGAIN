const express = require('express')

const db = require('../db/quote')

const router = express.Router()

router.get('/', (request, response) => {
  db.getQuote()
    .then((quote) => {
      const randomId = Math.floor(Math.random() * quote.length)
      response.json(quote[randomId])
    })

    .catch((err) => {
      console.error(err)
      response.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
