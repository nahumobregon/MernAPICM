var mongoose = require('mongoose')
var bluebird = require('bluebird')

//Test
/*
var Person=require('../sources/person/PersonModel.js')
*/

mongoose.Promise = bluebird

//var dbURI = 'mongodb://localhost:27017/test_nodeapi'
var dbURI ='mongodb+srv://nocsys:aBZSoxmrwDMeSHcS@nocsyscluster-nnls8.gcp.mongodb.net/test?retryWrites=true&w=majority'



//connecting mongoose to our db

mongoose.connect(dbURI,{useMongoClient:true})

//connection events
mongoose.connection.on('connected' , () => {
	console.log('conexion establecida con exito' + dbURI)
})

mongoose.connection.on('error', (err) => {
	console.log('error de conexion con Mongoose' + err)	
})


//Probemos la conexion
/* Comentamos el test
new Person({
	name:'Nahum',
	lastName:'Obregon',
	email:'nahumobregon@gmail.com',
	phone:'8115646767',
	age:41,
	weight:69,
	height:66
}).save((err,data)=>{
	if (err){
		console.log('Error ', err)
	}
	console.log(data)
})
*/

