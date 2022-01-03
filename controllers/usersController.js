const { User }    = require('../models');
const { Router } = require('express');
const { config } = require('../config');
const Users = require('./middlewares');

const router = Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
  const user = User.findByPk(req.params.id);
  res.status(200).json(user);
});

router.post('/', (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  const newUser = User.create({ name, email, password, phoneNumber });

  res.status(200).json(newUser);
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      idUser: req.params.id,
    },
  });

  res.status(200).json({ message: 'eliminado com sucesso' });
});

router.put('/:id', (req, res) => {
  const user = req.body;

  Product.update(user,
    {
      where: { idUser: req.params.id },
    }
  );

  res.status(200).json({ message: 'atualizado com sucesso' });
});

router.post('/register', (req,res) => {
  const body = req.body;
  User.create(body)
    .then((user) => Users.createToken(user))
});

module.exports = router;