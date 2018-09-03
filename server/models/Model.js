const mongoose = require('mongoose')

const ModelSchema = mongoose.Schema({
	name: String,
	brand: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Brand'
	}
})

module.exports = mongoose.model('Model', ModelSchema)