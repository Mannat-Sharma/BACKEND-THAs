const sequelize = require('../database')
const Sequelize = require('sequelize')

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    role:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User