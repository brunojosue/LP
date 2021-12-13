const { Router } = require('express');
const { User }  = require('../models');

const router = Router();

router.get('/', (req, res) => {
    const users = User.findAll();
    res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    console.log(user);
    res.status(200).json(user);
});

router.post('/', (req, res) => {
    const { firstName } = req.body;
    const newUser = User.create({ firstName });

    res.status(200).json("User created successfully!!");
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where:{
            id: req.params.id,
        },
    });

    res.status(200).json("User deleted successfully!!")
});

router.put('/:id', (req, res) => {
    const { firstName } = req.body;

    User.update({ firstName }),
    {
        where:{
            id: req.params.id
        },
    };
});

module.exports = router;

