const express = require('express')
const router = express.Router()



// подключаем все роуты
router.use('/car', require('./car'))
router.use('/model', require('./model'))
router.use('/homeland', require('./homeland'))


module.exports = router