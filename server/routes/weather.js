const express = require('express')
const request = require('superagent')
require('dotenv').config()

const router = express.Router()

const apiKey = process.env.OPEN_WEATHER_KEY

router.get('/', (req, res) => {
  request
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=-41.2924&lon=174.7787&appid=${apiKey}&units=metric`
    )
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Oh no... Not found.' })
    })
})

module.exports = router
