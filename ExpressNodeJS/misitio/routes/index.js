var express = require("express");
var router = express.Router();

const { Sequelize, Op } = require("sequelize");
const Producto = require("../models").producto;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/productos", function (req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
    .then((productos) => {
      res.render("productos", {
        title: "My Dashboard :: Productos",
        arrProductos: productos,
      });
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/productosc", function (req, res, next) {
  let cantidadmenor = parseInt(req.query.cantidadmenor);
  let cantidadmayor = parseInt(req.query.cantidadmayor);
  Producto.findAll({
    where: {
      cantidad: {
        [Op.between]: [cantidadmenor, cantidadmayor],
      },
    },
  })
    .then((productos) => {
      res.json(productos);
    })
    .catch((error) => res.status(400).send(error));
});

router.get( "/productosr/nombre/:nombre/cantidad/:cantidad",
  function (req, res, next) {
    let cantidad = parseInt(req.params.cantidad);
    let nombre = req.params.nombre;

    Producto.findAll({
      where: {
        [Op.and]: [{ cantidad: cantidad }, { nombre: nombre }],
      },
    })
      .then((productos) => {
        res.json(productos);
      })
      .catch((error) => res.status(400).send(error));
  }
);

module.exports = router;
