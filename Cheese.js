const sequelize = require('./db');
const  Sequelize = require('sequelize');

const Cheese = sequelize.define ("Cheese", {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});

module.exports = {Cheese}
