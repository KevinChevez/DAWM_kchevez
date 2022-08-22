const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefonos_compradores', {
    tlf_comprador_id: {
      autoIncrement: true,
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
    tlf_comprador: {
      type: DataTypes.CHAR(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'telefonos_compradores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tlf_comprador_id" },
        ]
      },
      {
        name: "fk_tlf_comprador_to_cliente",
        using: "BTREE",
        fields: [
          { name: "cliente_id" },
        ]
      },
    ]
  });
};
