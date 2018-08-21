const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo') (session);

const axios = require('axios');

mongoose.connect('mongodb://localhost/gorilla');


const app = express();
const instance = axios.create({
	baseURL: 'https://api.pinnacle.com/v1/fixtures'
	timout: 1000,
	headers: {'X-Custom-Header': 'foobar'}
})


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: '1mb'}));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(session({
	resave: true,
	secret: 'secret',
	saveUninitialized: true,
	key: 'key',
	store: new MongoStore({mongooseConnection: mongoose.connection})
}))


app.use('/api', require('./server/routes'));

app.get('*', (req, res, next) => {
	res.redirect('/#' + req.originalUrl)
})

app.listen(3001, () => {
	console.log('Server listening on port 3001')
})