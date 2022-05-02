const { Model, DataTypes } = require('sequelize');
const sequelize = require("../config/connection");

class Catagory extends Model {}

Catagory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)

module.exports = Catagory