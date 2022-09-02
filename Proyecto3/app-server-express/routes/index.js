var express = require('express');
var router = express.Router();

const { Op, HasMany, where } = require('sequelize');

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DAWM' });
});

// Obtengo los datos de la tabla Clientes en mi base de datos
router.get('/clientes', function(req, res, next) {
  models.clientes.findAll({
    include: [
      { 
        model: models.telefonos_compradores,
        as: 'telefonos_compradores',
      },
      { 
        model: models.pedidos,
        as: 'pedidos'
      }
    ],
  })
 .then(clientes => {
    res.json(clientes)
 })
 .catch(error => res.status(400).send(error))
});
router.post('/clientes', function(req, res, next) {
  let p_fireid_cliente = req.body.fireid;
  console.log(p_fireid_cliente);
  models.clientes.findOne({
    include: [
      { 
        model: models.telefonos_compradores,
        as: 'telefonos_compradores',
      },
      { 
        model: models.pedidos,
        as: 'pedidos'
      }
    ],
    where: {
      firebase_id: p_fireid_cliente
    }
  })
 .then(cliente => {
    res.json(cliente)
 })
 .catch(error => res.status(400).send(error))
});
router.get('/clientes/:id', function(req, res, next) {
  let p_id_cliente = req.params.id;
  models.clientes.findOne({
    include: [
      { 
        model: models.telefonos_compradores,
        as: 'telefonos_compradores',
      },
      { 
        model: models.pedidos,
        as: 'pedidos'
      }
    ],
    where: {
      cliente_id: p_id_cliente
    }
  })
 .then(cliente => {
    res.json(cliente)
 })
 .catch(error => res.status(400).send(error))
});

// Obtengo los datos de la tabla Productos en mi base de datos
router.get('/productos', function(req, res, next) {
  models.productos.findAll({
    include: [
      { 
        model: models.categorias,
        as: 'categorium'
      },
    ]
  })
 .then(productos => {
    res.json(productos)
 })
 .catch(error => res.status(400).send(error))
});
router.get('/productos/:id', function(req, res, next) {
  let param_id_prod = req.params.id;
  models.productos.findOne({
    include: [
      { 
        model: models.categorias,
        as: 'categorium'
      },
    ],
    where: {
      producto_id: param_id_prod
    }
  })
 .then(productos => {
    res.json(productos)
 })
 .catch(error => res.status(400).send(error))
});

// Obtengo los datos de la tabla Pedidos en mi base de datos
router.get('/pedidos', function(req, res, next) {
  models.pedidos.findAll({
    include: [{ 
      model: models.clientes,
      as: 'cliente'
    }],
  })
 .then(pedidos => {
    res.json(pedidos)
 })
 .catch(error => res.status(400).send(error))
});
router.get('/pedidos/:id', function(req, res, next) {
  let param_id_pedidos = req.params.id;
  models.pedidos.findOne({
    include: [{ 
      model: models.clientes,
      as: 'cliente'
    }],
    where: {
      pedido_id: param_id_pedidos,
    }
  })
 .then(pedidos => {
    res.json(pedidos)
 })
 .catch(error => res.status(400).send(error))
});

// Obtengo los datos de la tabla Categorias en mi base de datos
router.get('/categorias', function(req, res, next) {
  models.categorias.findAll({
    include: [{ 
      model: models.productos,
      as: 'productos'
    }],
  })
 .then(categorias => {
    res.json(categorias)
 })
 .catch(error => res.status(400).send(error))
});
router.get('/categorias/:id', function(req, res, next) {
  let param_id_categ = req.params.id;
  models.categorias.findOne({
    include: [{ 
      model: models.productos,
      as: 'productos'
    }],
    where: {
      categoria_id: param_id_categ,
    }
  })
 .then(categorias => {
    res.json(categorias)
 })
 .catch(error => res.status(400).send(error))
});

// Obtengo los datos de la tabla Telefonos Compradores en mi base de datos
router.get('/telefonos', function(req, res, next) {
  models.telefonos_compradores.findAll({
    include: [{ 
      model: models.clientes,
      as: 'cliente'
    }],
  })
  .then(tlfns => {
    res.json(tlfns)
 })
 .catch(error => res.status(400).send(error))
});
router.get('/telefonos/:id', function(req, res, next) {
  let param_id_tlf = req.params.id;
  models.telefonos_compradores.findOne({
    include: [{ 
      model: models.clientes,
      as: 'cliente'
    }],
    where: {
      tlf_comprador_id: param_id_tlf,
    }
  })
 .then(tlfns => {
    res.json(tlfns)
 })
 .catch(error => res.status(400).send(error))
});

// Obtengo los datos de la tabla Asignaciones de compras en mi base de datos
router.get('/asig_compra', function(req, res, next) {
  models.asignacion.findAll({
    include: [
      { 
        model: models.pedidos,
        as: 'pedido'
      },
      {
        model: models.productos,
        as: 'producto'
      }
    ],
  })
 .then(asig_compra => {
    res.json(asig_compra)
 })
 .catch(error => res.status(400).send(error))
});
router.get('/asig_compra/:id', function(req, res, next) {
  let param_asig_compra = req.params.id;
  models.asignacion.findOne({
    include: [
      { 
        model: models.pedidos,
        as: 'pedido'
      },
      {
        model: models.productos,
        as: 'producto'
      }
    ],
    where: {
      asignacion_id: param_asig_compra,
    }
  })
 .then(asig_compra => {
    res.json(asig_compra)
 })
 .catch(error => res.status(400).send(error))
});

module.exports = router;
