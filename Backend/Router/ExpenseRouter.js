const express = require('express');
const expenseModel=require('../models/expensemodel')

const router = express.Router();

router.post('/', async (req, res) => {
    try {
      const expense = new expenseModel(req.body);
      await expense.save();
      res.json(expense);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const expenses = await expenseModel.find();
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = router;