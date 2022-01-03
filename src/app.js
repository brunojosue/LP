const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const corsOptions = require('./config/cors');
const database = require('./database');
const router = require('./router');
const notFound = require('./middlewares/notfound');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.set(cors(corsOptions));
app.use(router.initialize());
app.use(notFound);
app.use(error);

try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

module.exports = app;
