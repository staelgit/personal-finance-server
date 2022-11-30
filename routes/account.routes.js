const express = require('express');
const CashAccount = require('../models/CashAccount');
const router = express.Router({ mergeParams: true });

// Кошельки
// проверять во всех случаях что userId = id пользователя аутентификации
// GET         /           получить все                     ГОТОВО
//             /:id        получить один
// POST        /           создать новый
// PUT         /:id        отредактировать существующий
// DELETE      /:id        удалить

router.get('/', async (req, res) => {
   try {
      const list = await CashAccount.find();
      res.status(200).send(list);
   } catch (e) {
      res.status(500).json({
         message: 'На сервере произошла ошибка. Попробуйте позже'
      });
   }
});

module.exports = router;
