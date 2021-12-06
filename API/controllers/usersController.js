const { Router } = require('express');
const { User }  = require('../models');

const router = Router();

router.get('/', (req, res) => {
    const users = User.findAll();
    res.status(200).json(users);
});

module.exports = router;

