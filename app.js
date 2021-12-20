const express = require('express');
const cors = require('cors');
const router = require('./router');
const error = require('./middleware/error');

const app = express();
app.use(express.json());
app.use(router.initialize());
app.set(cors());
app.use((req, res, next) => {
	const err = new Error("Oops! Sorry, we couldn't found you're looking for.");
	err.status = 404;
	next(err);
});
app.use(error);

const db = require('./database');

module.exports = app;
