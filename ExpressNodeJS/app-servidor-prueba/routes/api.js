var express = require("express");
var router = express.Router();

// Definicion de constantes para el uso de la base de datos
const {Sequelize, Op} = require("sequelize");
const Producto = require("../models").producto;

/* GET home page. */
router.get("/productos", (req, res, next) => {
  Producto.findAll({
    attributes: {},
  })
    .then((productos) => {
      res.json(productos);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

router.get("/productos/:id", (req, res, next) => {
  let id = parseInt(req.params.id);

  Producto.findOne({where: {id: id},})
    .then((productos) => {
      res.json(productos);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

module.exports = router;