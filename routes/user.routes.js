const express = require('express');
const User = require('../models/User');
const router = express.Router({ mergeParams: true });

// Пользователи
// проверять во всех случаях что userId = id пользователя аутентификации
// GET         /:id        получить один
// POST        /           создать новый
// PUT         /:id        отредактировать существующий
// DELETE      /:id        удалить

router.get('/', async (req, res) => {
   try {
      const list = await User.find();
      res.status(200).send(list);
   } catch (e) {
      res.status(500).json({
         message: 'На сервере произошла ошибка. Попробуйте позже'
      });
   }
});

module.exports = router;
