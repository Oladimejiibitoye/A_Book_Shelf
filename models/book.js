const Sequelize = require('sequelize');

const sequelize = require('../connection/database')

const Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    title: Sequelize.STRING,
    
    bookcover: {
        type: Sequelize.STRING,
        allowNull: false
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publication_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }

});

module.exports = Book;