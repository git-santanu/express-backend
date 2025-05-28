const { DataTypes } = require("sequelize");
const DB_TABLES = require("../config/constant");
const sequelize = require("../config/database");
const UserImages = require("./user-images");

const User =  sequelize.define(DB_TABLES.Users, {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
})
User.hasMany(UserImages, {
  foreignKey: 'user_id'
})
UserImages.belongsTo(User, {
  foreignKey: 'user_id'
})
module.exports = User