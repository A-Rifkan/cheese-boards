const {sequelize} = require('./db.js');
const {Sequelize} = require('sequelize');

const Board = sequelize.define ("Board", {
    type: Sequelize.STRING,
    description: Sequelize.STRING,
    rating: Sequelize.NUMBER
});

module.exports = {Board}