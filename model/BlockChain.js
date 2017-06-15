const express = require('express')
const Redis = require('../control/redis.js')

const redis = new Redis()
const router = express.Router()

router.post('/', (req, res, next) => {
  var blockname = req.body.blockname
  var hintsBlock = req.body['hint[]']

  redis.createNewBlock(blockname, hintsBlock)
    .then((reply) => {
      res.status(200).json({OK: {msg: 'Create new block susscessfully! ' + reply}})
    }).catch((err) => {
      res.status(200).json({err: {msg: 'Cannot create new block due to:  ' + err}})
    })
})

router.get('/getAllBlockNames', (req, res, next) => {
  redis.getAllBlockNames()
    .then((blocknames) => {
      res.status(200).json({OK: {msg: blocknames}})
    }).catch((err) => {
      res.status(200).json({err: {msg: 'Cannot get all blocks due to:  ' + err}})
    })
})

router.post('/getHintsOfABlock', (req, res, next) => {
  var blockname = req.body.blockname
  redis.getHintsOfABlock(blockname)
    .then((hints) => {
      res.status(200).json({OK: {msg: hints}})
    }).catch((err) => {
      res.status(200).json({err: {msg: 'Cannot get hints from block '+ blockname + ' due to:  ' + err}})
    })
})


module.exports = router
