const redis = require('redis')
// const client = redis.createClient(process.env.REDIS_URL)

module.exports = class Redis {
  constructor () {
    this.db = redis.createClient(process.env.REDIS_URL)
  }

  createNewBlock(blockname, hintsBlock) {
  	var createNewBlock = new Promise((resolve, reject) => {
  		this.db.exists(blockname, (err, isExisted) => {
  			if(!err) {
  				if(isExisted !== 1) {
  					resolve()
  				} else {
  					reject('The blockname exist. Please change the blockname!')
  				}
  			} else {
  				reject('The database seems broken. Please contact admin!')
  			}
  		})
  	})

  		var createNewBlock2 = createNewBlock.then(() => {
  			return new Promise((resolve, reject) => {
		  		this.db.sadd(blockname, hintsBlock, (err, reply) => {
			  		if(!err) {
			  			resolve(reply)
			  		} else {
			  			reject(err)
			  		}
  				})   					
  			})
 			
  		}).catch((err) => {
  			return Promise.reject(err)
  		})

  		return createNewBlock2
  }

  getAllBlockNames() {
  	return new Promise((resolve, reject) => {
  		this.db.keys('*', (err, keys) => {
  			if(!err) {
  				resolve(keys)
  			} else {
  				reject(err)
  			}
  		})
  	})
  }

  getHintsOfABlock(blockname) {
  	return new Promise((resolve, reject) => {
  		this.db.smembers(blockname, (err, hints) => {
  			if(!err) {
  				resolve(hints)
  			} else {
  				reject(err)
  			}
  		})
  	})
  }

}
