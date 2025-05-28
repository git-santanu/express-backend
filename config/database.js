const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME || 'test', process.env.DB_USERNAME || 'root', process.env.DB_PASSWORD || 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})
module.exports = sequelize