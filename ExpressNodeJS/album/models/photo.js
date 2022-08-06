'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  photo.init({
    descripcion: DataTypes.STRING,
    tiempo: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'photo',
  });
  return photo;
};