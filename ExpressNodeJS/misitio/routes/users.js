var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/kevinCh', function(req, res, next) {
  res.send('Respuesta en User para Kevin');
});

module.exports = router;
