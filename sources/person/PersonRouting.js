var express = require('express')
var router = express.Router()

var PersonController = require('./PersonController.js')

//http://localhost:3001/api/v1/person/save

//save a new person
router.route('/save').post(PersonController.savePerson)

//find all
router.route('/all').get(PersonController.findAllPerson)

module.exports = router;