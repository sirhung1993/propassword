const express = require('express')
const redis = require('../control/redis.js')
const router = express.Router()

router.post('/', (req, res, next) => {
  console.log(req.body)
  // var keyword = req.body['keyword[]']
  // var blockid = req.body.blockname
  // var encryptedPassword
  // try {
  //   encryptedPassword = encryptAlgo.encryptPassword(blockid, keyword)
  // } catch(err) {
  //   res.status(200).json({err: {msg: err}})
  // }
  // res.status(200).json({OK: {msg: encryptedPassword}})
})

module.exports = router
