const express = require('express')
const fs = require('fs')
const path = require('path')


const router = express.Router()

const asyncMiddleware = require('../async')


const Brand = require('../models/Brand')
const Model = require('../models/Model')
const Homeland = require('../models/Homeland')



// подключаем все роуты

router.post('/:id', (req, res, next) => {
	Homeland.findById(req.body.country).exec((err, homeland) => {
		
		if(err) return res.send(err)
		var brand = new Brand({
			title: req.body.title,
			country: req.body.country
		})

		console.log('post defined')

		brand.save((err, brand) => {
			if(err) return res.send(err)
			homeland.brands.push(brand._id)
			homeland.save((err, homeland) => {
				if(err) return res.send(err)
				res.send(brand)
			})
		})
	})
})





router.get('/admin', (req, res, next) => {
	Brand.find().exec((err, cars) => {
		if(err) return res.send(err)
		res.send(cars)
	})
})

router.get('/mileage', (req, res, next) => {
	Brand.find().populate('models').exec((err, cars) => {
		if(err) return res.send(err)
		res.send(cars)
	})
})

router.get('/search/:search_text', asyncMiddleware(async(req, res, next) => {
	const myRegExp = new RegExp(`${req.params.search_text}`, 'i')

	let result = await Brand.find({
		$or: [
			{title: myRegExp}
		]
	}).limit(5).exec()

	res.send(result)
}))





module.exports = router