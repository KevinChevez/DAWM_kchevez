var DataTypes = require("sequelize").DataTypes;
var _asignacion = require("./asignacion");
var _categorias = require("./categorias");
var _clientes = require("./clientes");
var _pedidos = require("./pedidos");
var _productos = require("./productos");
var _telefonos_compradores = require("./telefonos_compradores");

function initModels(sequelize) {
  var asignacion = _asignacion(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var clientes = _clientes(sequelize, DataTypes);
  var pedidos = _pedidos(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var telefonos_compradores = _telefonos_compradores(sequelize, DataTypes);

  productos.belongsTo(categorias, { as: "categorium", foreignKey: "categoria_id"});
  categorias.hasMany(productos, { as: "productos", foreignKey: "categoria_id"});
  pedidos.belongsTo(clientes, { as: "cliente", foreignKey: "cliente_id"});
  clientes.hasMany(pedidos, { as: "pedidos", foreignKey: "cliente_id"});
  telefonos_compradores.belongsTo(clientes, { as: "cliente", foreignKey: "cliente_id"});
  clientes.hasMany(telefonos_compradores, { as: "telefonos_compradores", foreignKey: "cliente_id"});
  asignacion.belongsTo(pedidos, { as: "pedido", foreignKey: "pedido_id"});
  pedidos.hasMany(asignacion, { as: "asignacions", foreignKey: "pedido_id"});
  asignacion.belongsTo(productos, { as: "producto", foreignKey: "producto_id"});
  productos.hasMany(asignacion, { as: "asignacions", foreignKey: "producto_id"});

  return {
    asignacion,
    categorias,
    clientes,
    pedidos,
    productos,
    telefonos_compradores,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
