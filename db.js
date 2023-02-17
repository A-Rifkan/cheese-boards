const {Sequelize} = require("sequelize");
const path = require('path');

// TODO - connect to db via sequelize
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "db.sqlite")
})
module.exports = {
    sequelize,
    Sequelize
};
