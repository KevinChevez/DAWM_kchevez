const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias', {
    categoria_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria_name: {
      type: DataTypes.CHAR(25),
      allowNull: false
    },
    categoria_descript: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "Una de las mejores categorías de nuestra tienda..."
    },
    categoria_min_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    categoria_max_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    categoria_src_img: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "\/src\/assets\/images\/img_not_available.png"
    },
    categoria_prom_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 4.5
    },
    categoria_hora_start: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "07:00:00"
    },
    categoria_hora_end: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "17:00:00"
    },
    categoria_liked: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'categorias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "categoria_id" },
        ]
      },
    ]
  });
};
