'use strict'
const md5 = require('md5')

module.exports = {
  passwordKey: 'ezkeytopass_BUIVIETHUNG_MIT_LIC',
  sessionSecret: md5(md5('Is md5 is enough?') + 'a website made by Bui Viet Hung'),
  encryptingSeed: function (userPassword) {
    return md5(md5(userPassword + this.passwordKey))
  },
}
