const {sequelize} = require('./db.js');
const  {Sequelize} = require('sequelize');

const Cheese = sequelize.define("Cheese", {
    title: Sequelize.STRING,
    description: Sequelize.STRING
});

module.exports = {Cheese};
