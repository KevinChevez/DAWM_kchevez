var express = require("express");
var router = express.Router();

const Sequelize = require("sequelize");
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

module.exports = router;
