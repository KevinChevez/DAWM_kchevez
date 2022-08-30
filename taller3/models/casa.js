const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('casa', {
    casa_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ciudad: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pisos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechaDeVenta: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'casa',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "casa_id" },
        ]
      },
    ]
  });
};
