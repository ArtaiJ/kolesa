const express = require('express')
const fs = require('fs')
const path = require('path')


const router = express.Router()

const Brand = require('../models/Brand')
const Model = require('../models/Model')
const Homeland = require('../models/Homeland')

// подключаем все роуты
router.get('/admin', (req, res, next) => {
	Homeland.find().exec((err, homelands) => {
		if(err) return res.send(err)
		res.send(homelands)
	})
})



router.post('/', (req, res, next) => {
	var homeland = new Homeland({
		land: req.body.land
	})

		homeland.save((err, homeland) => {
		if (err) return res.send(err)
		res.send(homeland)
	})
})










module.exports = router