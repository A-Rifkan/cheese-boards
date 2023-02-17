const sequelize = require('./db');
const  Sequelize = require('sequelize');

const User = sequelize.define ("User", {
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = {User}