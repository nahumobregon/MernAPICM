var express = require ('express')
var bodyParser = require('body-parser')
var http= require('http')

//import our db connection
var db = require('./config/Connection.js')

//import routing
var PersonRouting = require('./sources/person/PersonRouting.js')


//create our express app
var app = express()

//adding middleware s to our app
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin','*')
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept')
	res.setHeader('Access-Control-Allow-Methods','POST,GET,PATCH,DELETE,OPTIONS')
	next()
})

//enrutar los requests a routing express
//automaticamente concatena el /save o el /All de Personrouting.js
app.use('/api/v1/person/',PersonRouting)

//Crear el server para la api
var server = http.createServer(app)

server.listen(3001,function(){
	console.log('Api listening on port 3001')
})
