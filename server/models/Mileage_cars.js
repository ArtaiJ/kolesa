const mongoose = require('mongoose')

const Mileage_carsSchema = mongoose.Schema({
	brand: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Brand'
	},
	model: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Model'
	},
	type: String,
	year: Number,
	price: Number,
	engine: Number,
	engine_type: String,
	vin: String,
	transmission: String,
	mileage: Number,
	mileage_unit: String,
	wheel: String,
	color: String,
	presence: String,
	cleared: String,
	state: String,
	drive: String,
	text: String,
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	region: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Region'
	}, 
	date: {
		type: Date,
		default: Date.now
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}
	],
	link: [String]
})

module.exports = mongoose.model('Mileage_cars', Mileage_carsSchema)