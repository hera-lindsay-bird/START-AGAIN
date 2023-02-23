require('dotenv').config()
const request = require('superagent')
const express = require('express')
const apiKey = process.env.API_KEY
const router = express.Router()

router.get('/', (req, res) => {
  request
    .get(
      `https://api.unsplash.com/photos/random/?orientation=landscape&topics=6sMVjTLSkeQ&client_id=${apiKey}`
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
