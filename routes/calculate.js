var express = require('express');
var router = express.Router();
var history = require('../models/calculator-history');

const handleCalculate = (input) => {
  const result = eval(input);
  history.create(input, result);
}

router.post('/', function(req, res, next) {
  handleCalculate(req.body.input);
  res.redirect('/')
});

module.exports = router;
