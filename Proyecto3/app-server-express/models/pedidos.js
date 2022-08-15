const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pedidos', {
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: 'cliente_id'
      }
    },
    pedido_name: {
      type: DataTypes.CHAR(25),
      allowNull: false
    },
    pedido_descript: {
      type: DataTypes.CHAR(100),
      allowNull: true,
      defaultValue: "Producto nuevo en nuestra tienda"
    },
    pedido_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pedido_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    pedido_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 5
    }
  }, {
    sequelize,
    tableName: 'pedidos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pedido_id" },
        ]
      },
      {
        name: "fk_pedido_to_cliente",
        using: "BTREE",
        fields: [
          { name: "cliente_id" },
        ]
      },
    ]
  });
};
