const { DataTypes } = require("sequelize");
const DB_TABLES = require("../config/constant");
const sequelize = require("../config/database");

const UserImages = sequelize.define(DB_TABLES.User_Images, {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: DB_TABLES.Users,
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      file_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      original_file_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      file_path: {
        type: DataTypes.STRING,
        allowNull: true
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
module.exports = UserImages