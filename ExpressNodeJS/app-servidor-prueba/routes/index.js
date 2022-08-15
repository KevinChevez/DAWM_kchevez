var express = require('express');
var router = express.Router();

// Definicion de constantes para el uso de la base de datos
const Sequelize = require('sequelize');
const Producto = require('../models').producto;  

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.valid){
    res.render('index', { title: 'Express' });
  }
  else {
    res.redirect('/login');
  }
});

router.get('/productos', (req, res, next) => {
  if(req.session.valid){
    Producto.findAll({
      attributes: {}
    })
    .then(productos => {
      res.render('productos', { title: 'Productos', arrProductos: productos });
    })
    .catch(error => {
      res.status(400).send(error); 
    })
  }else{
    res.redirect('/login');
  }
});

module.exports = router;
