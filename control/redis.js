const redis = require('redis')
// const client = redis.createClient(process.env.REDIS_URL)

module.exports = class Redis {
  constructor () {
    this.connectDB = redis.createClient(process.env.REDIS_URL)
  }
  
}
