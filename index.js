const express = require("express");
const controllers = require('./controllers');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', controllers.users);

app.listen(port, () => console.log('Server running:::'))