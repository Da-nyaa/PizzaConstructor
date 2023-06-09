const express = require('express');

const controller = require('../controllers/pizzaController');

const router = express.Router();

router.post('/', (req, res) => {
  controller.create(res, req.body);
});

router.get('/', (req, res) => {
  controller.get(res, req.query);
});

module.exports = router;
