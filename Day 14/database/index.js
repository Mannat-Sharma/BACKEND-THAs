const Sequelize = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(
    "postgres",
    "postgres",
    process.env.PASSWORD,
    {
        host: "localhost",
        dialect:"postgres"
    }
)
module.exports = sequelize