const config = require('./src/config/config')[process.env.NODE_ENV || 'development'];
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
	config.development.name,
	config.development.username,
	config.development.password,
	{
		host: config.development.host,
		port: config.development.port,
		dialect: config.development.type,
	}
);

module.exports = sequelize;
