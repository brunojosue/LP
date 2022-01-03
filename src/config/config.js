require('dotenv').config();

const config = {
	development: {
		server: {
			host: process.env.SERVER_HOST || '127.0.0.1',
			port: process.env.SERVER_PORT || 3000,
		},
		database: {
			type: process.env.DATABASE_TYPE || 'mysql',
			host: process.env.DATABASE_HOST || '127.0.0.1',
			port: process.env.DATABASE_PORT || 3306,
			name: process.env.DATABASE_NAME || 'lp',
			username: process.env.DATABASE_USERNAME || 'root',
			password: process.env.DATABASE_PASSWORD || null,
		},
	},
	production: {},
};

module.exports = config;
