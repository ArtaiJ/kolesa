const mongoose = require('mongoose')

const RegionShema = mongoose.Schema({
	place: String,
	mileage_cars: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Mileage_cars'
		}
	]
})

module.exports = mongoose.model('Region', RegionShema)