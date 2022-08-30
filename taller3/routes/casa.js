var express = require("express");
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);  

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Casa" });
});

//Entregar todo el json
router.get("/valores/datos", function (req, res, next) {
  models.casa.findAll({
  })
 .then(casas => {
    res.json(casas)
 })
 .catch(error => res.status(400).send(error))
});

router.get("/valores/vista", function (req, res, next) {
  models.casa.findAll({
    attributes: {}
  })
  .then(casas => {
    res.render("casa", { title: "Casa" , arrCasas: casas });
  })
  .catch(error => {
    res.status(400).send(error); 
  })
});
module.exports = router;
