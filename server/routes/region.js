const express = require('express')
const fs = require('fs')
const path = require('path')


const router = express.Router()

const Brand = require('../models/Brand')
const Model = require('../models/Model')
const Homeland = require('../models/Homeland')
const Region = require('../models/Region')

// подключаем все роуты
router.get('/', (req, res, next) => {
	Region.find().exec((err, regions) => {
		if(err) return res.send(err)
		res.send(regions)
	})
})



router.post('/', (req, res, next) => {
	var region = new Region({
		place: req.body.place
	})

		region.save((err, region) => {
		if (err) return res.send(err)
		res.send(region)
	})
})


module.exports = router