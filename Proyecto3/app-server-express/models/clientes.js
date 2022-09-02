const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clientes', {
    cliente_id: {
      autoIncrement: true,
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
      type: DataTypes.CHAR(128),
      allowNull: false
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
    },
    firebase_id: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    img_perfil_name: {
      type: DataTypes.STRING(128),
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
