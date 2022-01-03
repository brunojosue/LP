const { Sequelize, DataTypes  } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
	idusers: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	name: {
		type: DataTypes.STRING(144),
		allowNull: false,
	},
	email: {
		type: DataTypes.STRING(144),
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone_number: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	createdAt: Sequelize.DATE,
	updatedAt: Sequelize.DATE,
}, {
	tableName: 'User'
});

module.exports = User;