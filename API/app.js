const express = require('express');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', true);
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Content-Type,X-ACCESS-TOKEN'
	);
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
app.use((req, res, next) => {
	const err = new Error("Oops! Sorry, we couldn't found you're looking for.");
	err.status = 404;
	next(err);
});
app.use(errorHandler);

const db = require('./database');

module.exports = app;
