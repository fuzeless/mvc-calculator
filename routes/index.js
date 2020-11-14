var express = require('express');
var router = express.Router();
var history = require('../models/calculator-history');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    history,
});
});

router.get('/ping', (req, res) => {
  res.send('pong lmao');
})

module.exports = router;
