const express = require('express')
const fs = require('fs')
const path = require('path')


const router = express.Router()

const Brand = require('../models/Brand')
const Model = require('../models/Model')

// подключаем все роуты

router.post('/:id', (req, res, next) => {
	Brand.findById(req.body.brand).exec((err, car) => {
		
		if(err) return res.send(err)
		var model = new Model({
			name: req.body.name,
			brand: req.body.brand
		})

		console.log('post defined')

		model.save((err, model) => {
			if(err) return res.send(err)
			car.models.push(model._id)
			car.save((err, car) => {
				if(err) return res.send(err)
				res.send(model)
			})
		})
	})
})








module.exports = router