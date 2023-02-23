const express = require('express')

const db = require('../db/entries')

const router = express.Router()

// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   db.getEntry(id)
//     .then((entry) => {
//       res.json(entry)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).send('Something went wrong with getting one entry by id')
//     })
// })

router.get('/', (req, res) => {
  db.getAllEntries()
    .then((entries) => {
      res.json(entries)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Something went wrong with getting all entries')
    })
})

router.post('/', (req, res) => {
  const entry = req.body
  entry.date = new Date(Date.now())
  db.createEntries(entry)
    .then((ids) => {
      const id = ids[0]
      res.redirect(`entries/${id}`)
    })
    .catch((err) => {
      console.error(err.message)
    })
})

module.exports = router
