var DataTypes = require("sequelize").DataTypes;
var _casa = require("./casa");

function initModels(sequelize) {
  var casa = _casa(sequelize, DataTypes);


  return {
    casa,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
