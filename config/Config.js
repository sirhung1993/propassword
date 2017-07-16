'use strict'
const fs = require('fs')
const path = require('path')
const md5 = require('md5')

let productionConfigDoesNotExist
let productionConfigurationPath = path.join(__dirname, '/ProConfig.js')
try {
  fs.accessSync(productionConfigurationPath, fs.constants.R)
} catch (e) {
  productionConfigDoesNotExist = e
}

module.exports = class Config {
  constructor (DEVorPro) {
    if (DEVorPro === 'DEV' || productionConfigDoesNotExist) {
      this.passwordKey = process.env.SECRET_KEY_1 || 'passwordKey'
      // this.encryptingSeed = function(username) {
      //   return username + 'It need to be encrypted here'
      // }

      if (process.env.SECRET_KEY_2 && process.env.SECRET_KEY_3) {
        this.sessionSecret = md5(md5(process.env.SECRET_KEY_2) + process.env.SECRET_KEY_3)
      } else {
          this.sessionSecret = 'something need to be hide'
      }

      this.operationMode = process.env.OPERATION_MODE || 'DEV'

      this.redisDB = process.env.REDIS_URL || 'redis://h:p9c3513ffb964ebde4190c01912a670257c57df5290ba44d53764862a208a9b99@ec2-34-203-180-66.compute-1.amazonaws.com:52179'

      this.encryptingSeed = function(userPassword) {
        return md5(md5(userPassword + this.passwordKey))
      }
      
    } else if (DEVorPro === 'PRO' || productionConfigDoesNotExist === undefined) {
      //  For specific purpose configurations - write the content below in ~/config/ProConfig.js/ It will replace all the default configurations.
      let productionConfigurationPath = path.join(__dirname, '/ProConfig.js')
      const ProConfig = require(productionConfigurationPath)

      this.passwordKey = ProConfig.passwordKey
      this.encryptingSeed = ProConfig.encryptingSeed
      this.sessionSecret = ProConfig.sessionSecret
    }
  }
  }
