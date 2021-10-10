const sequelize = require('../database')
const Sequelize = require('sequelize')

const Products = sequelize.define("products", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    count:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT
    },
    image:{
        type: Sequelize.STRING,
    }
});

module.exports = Products