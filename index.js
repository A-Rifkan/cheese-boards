const {User} = require("./User.js");
const {Cheese} = require("./Cheese.js");
const {Board} = require("./Board.js");

//One to many
User.hasMany(Board);
Board.belongsTo(User);

//Many to many
Board.belongsToMany(Cheese, {through: "board_cheese"});
Cheese.belongsToMany(Board, {through: "board_cheese"});


module.exports = {User, Cheese, Board}