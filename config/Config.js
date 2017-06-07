'use strict'
const fs = require('fs')
const path = require('path')

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
      this.passwordKey = 'passwordKey'
      this.encryptingSeed = function(username) {
        return username + 'It need to be encrypted here'
      }
      this.sessionSecret = 'something need to be hide'
    } else if (DEVorPro === 'PRO' || productionConfigDoesNotExist === undefined) {
      //  For Production Version
      let productionConfigurationPath = path.join(__dirname, '/ProConfig.js')
      const ProConfig = require(productionConfigurationPath)

      this.passwordKey = ProConfig.passwordKey
      this.encryptingSeed = ProConfig.encryptingSeed
      this.sessionSecret = ProConfig.sessionSecret
    }
  }
  }
