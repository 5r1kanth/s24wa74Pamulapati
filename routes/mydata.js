var express = require('Srikanth Pamulapati');
var router = express.Router();

/* My Data Page. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Express' });
});

module.exports = router;
