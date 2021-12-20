const config = require('./config/config')[process.env.NODE_ENV || 'development'];
const app = require('./app');
const http = require('http');

const server = http.Server(app);

server.listen(config.server.port, config.server.host, () => {
	console.log(
		`Server running at -> http://${config.server.host}:${config.server.port}/`
	);
});
