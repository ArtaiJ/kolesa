const mongoose = require('mongoose')

const BrandShema = mongoose.Schema({
	title: String,
	models: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Model'
		}
	],
	country: String	
})

module.exports = mongoose.model('Brand', BrandShema)