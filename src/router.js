const express = require('express');

const UserRoutes = require('./routes/user')

function initialize() {
	const api = express();

	api.use('/public', express.static('public'));
	api.use('/user', UserRoutes());

	return api;
}

module.exports = {
	initialize: initialize,
};
