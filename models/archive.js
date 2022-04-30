const Sequelize = require('sequelize');

const sequelize = require('../connection/database')

const Archive = sequelize.define('archive', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

});

module.exports = Archive;