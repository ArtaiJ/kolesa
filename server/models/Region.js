const mongoose = require('mongoose')

const RegionShema = mongoose.Schema({
	place: String
})

module.exports = mongoose.model('Region', RegionShema)