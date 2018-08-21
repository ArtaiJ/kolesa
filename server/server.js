const express = require('express');

const app = express();

app.use('/api', require('./server/routes'));

app.get('*', (req, res, next) => {
	res.redirect('/#' + req.originalUrl)
})

app.listen(8000, () => {
	console.log('Server listening on port 8000')
})