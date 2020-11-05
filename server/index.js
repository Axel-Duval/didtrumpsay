require('dotenv').config()
const  express = require("express")
const  app = express()
const  PORT = process.env.PORT || 3000
const  morgan = require("morgan")
const  bodyParser = require("body-parser")  

//Listen on PORT
const server = app.listen(PORT, () => {
    console.log('Server is running on port : ' + PORT)
}) 

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:  false}))
app.use(bodyParser.json()) 

//Give access to clients
app.use((req,res,next) => {
	res.header('Access-Control-Allow-Origin','*')//Replace * with whitelist urls
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With,Content-Type,Accept, Authorization'
	)
	if (req.method === 'OPTIONS') {
		res.header(
			'Access-Control-Allow-Methods',
			'PUT, POST, GET'
		)
		return res.status(200).json({})
	}
	next()
})  

//Routing
const versionOne = require('./v1/index')
app.use('/api/v1', versionOne)

//Manage errors
app.use((req,res,next) => {
	const err = new Error('Not found')
	err.status = 404
	next(err)
})

app.use((err,req,res,next) => {
	res.status(err.status || 500)
	res.json({
		error : {
            message :  err.message,
            status :  err.status
		}
	})
})  

module.exports = app
