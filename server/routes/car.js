const express = require('express')
const fs = require('fs')
const path = require('path')


const router = express.Router()

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


router.delete('/:id', (req, res, next) => {
	Post.remove({_id: req.params.id})
		.exec((err, result) => {
			if(err) return res.send(err)
			res.send(200)
		})
})



router.put('/',  (req, res, next) => {
	Post.findById(req.body._id).exec((err, post) => {
		if(err) {
			res.status(500).send(err)
		} else {
			post.title = req.body.title
			post.content = req.body.content
			post.author = req.body.author
			post.save((err, result) => {
				if(err) {
					res.status(500).send(err)
				} else {
					res.status(200).send(result)
					console.log(post)
				}
			})
		}
	})
})



router.get('/admin', (req, res, next) => {
	Brand.find().exec((err, cars) => {
		if(err) return res.send(err)
		res.send(cars)
	})
})

// router.get('/:id', (req, res, next) => {
// 	Post.findById(req.params.id).populate('models')
// 		.exec((err, car) => {
// 			if(err) return res.send(err)
// 			res.send(car)
// 		})
// })






module.exports = router