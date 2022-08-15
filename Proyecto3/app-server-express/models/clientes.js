const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_fname: {
      type: DataTypes.CHAR(25),
      allowNull: false
    },
    cliente_lname: {
      type: DataTypes.CHAR(25),
      allowNull: false
    },
    cliente_address: {
      type: DataTypes.CHAR(25),
      allowNull: false
    },
    cliente_telf: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    cliente_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 5
    },
    cliente_ncomment: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cliente_nliked: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clientes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cliente_id" },
        ]
      },
    ]
  });
};
