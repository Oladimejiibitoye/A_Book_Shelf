const Sequelize = require('sequelize');

const sequelize = require('../connection/database')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    Name: Sequelize.STRING,
    Email: Sequelize.STRING,
    
});

module.exports = User;