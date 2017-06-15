'use strict'
const md5 = require('md5')

module.exports = {
  passwordKey: process.env.SECRET_KEY_1,
  sessionSecret: md5(md5(process.env.SECRET_KEY_2) + process.env.SECRET_KEY_3),
  encryptingSeed: function (userPassword) {
    return md5(md5(userPassword + this.passwordKey))
  },
}
