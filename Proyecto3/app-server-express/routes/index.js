var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cliente', function(req, res, next) {
  models.clientes.findAll({
    // include: [{ 
    //   model: models.pedido,
    //   as: 'pedido_id'
    // }],
  })
 .then(clientes => {
    res.json(clientes)
 })
 .catch(error => res.status(400).send(error))
});

router.get('/pedido', function(req, res, next) {
  models.pedidos.findAll({
    // include: [{ 
    //   model: models.cliente,
    //   as: 'cliente_id'
    // }],
  })
 .then(pedidos => {
    res.json(pedidos)
 })
 .catch(error => res.status(400).send(error))
});


module.exports = router;
