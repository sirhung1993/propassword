'use strict'
const express = require('express')
const session = require('express-session')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const form = require('multer')()
const app = express()

const PassGen = require('./model/passgenerator.js')
const BlockChain = require('./model/BlockChain.js')

const Config = require('./config/Config.js')
const config = new Config()

app.use(helmet())
app.use(helmet.referrerPolicy({ policy: 'same-origin' }))

app.get('/',(req, res, next) => {
	console.log(req.headers["x-forwarded-proto"])
	if (req.headers["x-forwarded-proto"] === 'https' || process.env.OPERATION_MODE === 'DEV') {
		next()
	} else{
		res.redirect('https://ezkeytopass.herokuapp.com')
		// next()
	}
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use('/src', express.static('./views/src'))
app.use('/layout', express.static('./views/layout'))
app.use('/views', express.static('./views'))
app.set('port', (process.env.PORT || 5000))
app.use('/passgen', PassGen)
app.use('/blockchain', BlockChain)

app.get('/', function (req, res, next) {
  // console.log("https://" + req.hostname + req.url)
  res.render('pages/index')
})

app.get('/newblock', function (req, res, next) {
  res.render('pages/createnewblock')
})

app.get('(error_page|*)' , function ( req , res , next) {
    res.status(404).render ('pages/error_page')
})

app.listen(app.get('port'), () => {
  console.log('Server is running at this : ' + app.get('port'))
})
