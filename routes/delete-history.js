var express = require('express');
var router = express.Router();
var history = require('../models/calculator-history');

const handleDelete = (index) => {
  history.delete(index);
}

router.post('/', function(req, res, next) {
  handleDelete(req.body.index);
  res.redirect('/')
});

module.exports = router;
