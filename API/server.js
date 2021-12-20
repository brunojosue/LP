const app = require('./app');
const http = require('http');

const server = http.Server(app);

server.listen(config.server.port, config.server.host, () => {
	console.log(`Server running at http://${config.server.host}:${config.server.port}/`);
});




app.use(router.initialize());
const server = http.Server(app);

server.listen(port, host, () => {
    console.log(`Server running at  http://${host}:${port}/`);
});

//###!!! MANUAL SEQUELIZE !!!####//
//### https://sequelize.org/master/manual/ ###//