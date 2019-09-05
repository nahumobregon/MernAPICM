var Person = require('./PersonModel.js')

var save = (req,res) => {

	var person = new Person({
		name: 		req.body.name,
		lastName: 	req.body.lastName,
		email:      req.body.email,
		phone:      req.body.phone,
		age:        req.body.age,
		weight:     req.body.weight,
		height:     req.body.height
	})

	person.save(( err, data ) => {
		if (err) {
			console.log('Error ', err)
			return res.status(500).json({
				message : 'Un error ha ocurrido',
				error: err
			})
		}
	
		console.log(data)
		res.status(201).json({
			message: 'Persona Guardada',
			result: data
		})
	})
}

var findAll = (req,res) =>{
	Person.find().exec()
		.then((data) => {
			res.status(200).json({
				message : 'Datos Encontrados Listados',
				result  : data
			})
		}).catch((err) =>{
			return res.status(500).json({
				message: 'Un error a ocurrido',
				error : err
			})
		})
}

module.exports = {
	//cuando llamen el metodo saveperson o findAllPerson
	savePerson: save,
	findAllPerson: findAll
}