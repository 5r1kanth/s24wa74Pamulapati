var express = require('express');
var router = express.Router();

/* Computation end point. */
router.get('/', function(req, res, next) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const x = req.query.x ? parseFloat(req.query.x) : randomNumber;

  var function1 = `Math.pow of 2 applied to ${x} is ${Math.pow(x, 2)}`
  var function2 = `Math.sign applied to ${x} is ${Math.sign(x)}`
  var function3 = `Math.tanh applied to ${x} is ${Math.tanh(x)}`
  var function4 = `Math.trunc applied to ${x} is ${Math.trunc(x)}`

  res.render('computation', { title: 'Srikanth Pamulapati - Computation', valueOne: [`${function1}`, `${function2}`, `${function3}`, `${function4}`]});


});

module.exports = router;
