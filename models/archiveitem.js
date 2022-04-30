const Sequelize = require('sequelize');

const sequelize = require('../connection/database')

const ArchiveItem = sequelize.define('archiveitem', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

});

module.exports = ArchiveItem;