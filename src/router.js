const express = require('express');

const UserRoutes = require('./routes/user')
const AuthRoutes = require('./routes/auth')

function initialize() {
	const api = express();

	api.use('/public', express.static('public'));
	api.use('/user', UserRoutes());
	api.use('/auth', AuthRoutes());

	return api;
}

module.exports = {
	initialize: initialize,
};
