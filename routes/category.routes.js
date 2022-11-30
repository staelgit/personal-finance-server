const express = require('express');
const Category = require('../models/Category');
const router = express.Router({ mergeParams: true });

// Категории доходов и расходов (получение по типу income, expense)
// проверять во всех случаях что userId = id пользователя аутентификации
// GET         /                 получить все                     ГОТОВО
//             ?typeOperation=income      получить группу поступлений
//             ?typeOperation=expense     получить группу расходов
//             ?categoryId=из справочника     получить операции по категории
//             ?cashAccountId=из справочника     получить операции по кошельку
//             /:id              получить один
// POST        /                 создать новый
// PUT         /:id              отредактировать существующий
// DELETE      /:id              удалить

router.get('/', async (req, res) => {
   try {
      const list = await Category.find();
      res.status(200).send(list);
   } catch (e) {
      res.status(500).json({
         message: 'На сервере произошла ошибка. Попробуйте позже'
      });
   }
});

module.exports = router;
