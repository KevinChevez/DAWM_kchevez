var express = require("express");
var router = express.Router();

const { Sequelize, Op } = require("sequelize");
const Photo = require("../models").photo;

router.get("/album", function (req, res, next) {
  Photo.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.status(400).send(error));
});
module.exports = router;

router.get("/album/:id", function (req, res, next) {
  Photo.findOne({ where: { id: req.params.id } })
    .then((photos) => {
      res.json(photos);
    })
    .catch((error) => res.status(400).send(error));
});
