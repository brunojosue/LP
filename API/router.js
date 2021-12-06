const express = require('express');
const controllers = require('./controllers');

function initialize(){
    let api = express();
    
    api.use('/users', controllers.users);

    return api;
}

module.exports = {
    initialize: initialize,
};