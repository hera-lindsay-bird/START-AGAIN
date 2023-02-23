const express = require('express')
const path = require('path')

const entriesRoutes = require('./routes/entries')
const quoteRoutes = require('./routes/quote')
const weatherRoutes = require('./routes/weather')
const imageRoutes = require('./routes/image')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/quote', quoteRoutes)
server.use('/api/v1/weather', weatherRoutes)
server.use('/api/v1/image', imageRoutes)
server.use('/api/v1/entries', entriesRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
