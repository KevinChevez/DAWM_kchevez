const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    producto_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'categoria_id'
      }
    },
    producto_name: {
      type: DataTypes.CHAR(25),
      allowNull: false
    },
    producto_descript: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "Producto nuevo en nuestra tienda"
    },
    producto_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    producto_src_img: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "\/src\/assets\/images\/img_not_available.png"
    },
    producto_rate: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 5
    },
    producto_hora_start: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "07:00:00"
    },
    producto_hora_end: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: "17:00:00"
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "producto_id" },
        ]
      },
      {
        name: "fk_producto_to_categoria",
        using: "BTREE",
        fields: [
          { name: "categoria_id" },
        ]
      },
    ]
  });
};
