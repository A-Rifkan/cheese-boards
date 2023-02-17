const {sequelize} = require('./db.js');
const  {Sequelize} = require('sequelize');

const User = sequelize.define("User", {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = {User};