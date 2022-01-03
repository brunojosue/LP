const express = require('express');
const controllers = require('./controllers');

function initialize() {
	const api = express();

	api.use('/api/v1/users', controllers.users);

	return api;
}

module.exports = {
	initialize: initialize,
};
