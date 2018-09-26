const express = require('express')
const multer  = require('multer')
const fs = require('fs')
const path = require('path')
const upload = multer({ dest: 'uploads/' })

const router = express.Router()

const Brand = require('../models/Brand')
const Model = require('../models/Model')
const Homeland = require('../models/Homeland')
const Mileage_cars = require('../models/Mileage_cars')
const Region = require('../models/Region')
const User = require('../models/User')
const Comment = require('../models/Comment')



// подключаем все роуты

router.post('/', upload.single('file'), (req, res, next) => {
	console.log('start')
	
	User.findOne({email: req.body.email}).exec((err, user) => {
		console.log('User found')
		if(err) return res.send(err)

		var post = new Mileage_cars({
			brand: req.body.brand,
			model: req.body.model,
			type: req.body.type,
			year: req.body.year,
			price: req.body.price,
			engine: req.body.engine,
			engine_type: req.body.engine_type,
			vin: req.body.vin,
			transmission: req.body.transmission,
			mileage: req.body.mileage,
			mileage_unit: req.body.mileage_unit,
			wheel: req.body.wheel,
			color: req.body.color,
			presence: req.body.presence,
			cleared: req.body.cleared,
			state: req.body.state,
			drive: req.body.drive,
			text: req.body.text,
			region: req.body.region
		})

		let tempPath = req.file.path;
		let targetPath = path.resolve(`public/uploads/${post._id}.${req.file.originalname.split('.').pop()}`);
		fs.rename(tempPath, targetPath, (err) => {
			if(err) return res.send(err)
			post.link = `uploads/${post._id}.${req.file.originalname.split('.').pop()}`
			post.save((err, post) => {
				if (err) return res.send(err)
				user.ads.push(post._id)
				user.save((err, user) => {
					if(err) return res.send(err)
					console.log(user)
				})
				Region.findById(req.body.region).exec((err, region) => {
					if(err) return res.send(err)
					region.mileage_cars.push(post._id)
					region.save((err, region) => {
						if(err) return res.send(err)
						res.send(post)
					})
				})
			})
		})
	})

	
})




module.exports = router