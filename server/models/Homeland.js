const mongoose = require('mongoose')

const HomelandShema = mongoose.Schema({
	land: String,
	brands: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Brand'
		}
	]
})

module.exports = mongoose.model('Homeland', HomelandShema)