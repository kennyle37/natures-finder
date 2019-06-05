const Sequelize = require('sequelize');
const db = require('../config/db');

const User = require('./user');
const Order = require('./order');
const Restaurant = require('./restaurant');

const User_Restaurant = db.define('user_restaurant', {}, {
  underscored: true
});

Restaurant.belongsToMany(User, {
  through: User_Restaurant,
})

User.belongsToMany(Restaurant, {
  through: User_Restaurant,
})

module.exports = User_Restaurant;
