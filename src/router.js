const express = require('express');
const controllers = require('./controllers');

function initialize() {
	const api = express();

	api.use('/public', express.static('public'));
	api.use('/users', controllers.users);

	return api;
}

module.exports = {
	initialize: initialize,
};
