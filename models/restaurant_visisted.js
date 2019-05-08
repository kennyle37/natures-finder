const Sequelize = require('sequelize');
const db = require('../config/db');

const User = require('./user');
const Order = require('./order');
const restroom = require('./restroom');

const Restaurant_Visited = db.define('restaurant_visited');

Restaurant_Visited.belongsToMany(User, {
  through: Restaurant_Visited
})

Restaurant_Visited.belongsToMany(Order, {
  through: Restaurant_Visited
})

Restaurant_Visited.belongsToMany(restroom, {
  through: Restaurant_Visited
})

module.exports = Restaurant_Visited;
