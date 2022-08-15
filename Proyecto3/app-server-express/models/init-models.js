var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _pedidos = require("./pedidos");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var pedidos = _pedidos(sequelize, DataTypes);

  pedidos.belongsTo(clientes, { as: "cliente", foreignKey: "cliente_id"});
  clientes.hasMany(pedidos, { as: "pedidos", foreignKey: "cliente_id"});

  return {
    clientes,
    pedidos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
