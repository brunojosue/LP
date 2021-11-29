const express = require('express');

function initialize(){
    let api = express();
    
    //api.use('/comodities', comAPI());

    return api;
}

module.exports = {
    initialize: initialize,
};