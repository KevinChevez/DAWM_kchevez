const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asignacion', {
    asignacion_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pedidos',
        key: 'pedido_id'
      }
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'producto_id'
      }
    },
    asignacion_cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    asignacion_subtotal_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'asignacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "asignacion_id" },
        ]
      },
      {
        name: "fk_asignacion_to_pedido",
        using: "BTREE",
        fields: [
          { name: "pedido_id" },
        ]
      },
      {
        name: "fk_asignacion_to_producto",
        using: "BTREE",
        fields: [
          { name: "producto_id" },
        ]
      },
    ]
  });
};
