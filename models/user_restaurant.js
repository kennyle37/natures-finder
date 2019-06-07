const Sequelize = require('sequelize');
const db = require('../config/db');

const User = require('./user');
const Restaurant = require('./restaurant');

const User_Restaurant = db.define('user_restaurant', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }, 
  restaurant_id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
}, {
  underscored: true
});

// Restaurant.belongsToMany(User, {
//   through: User_Restaurant,
//   foreignKey: 'restaurant_id'
// })

// User.belongsToMany(Restaurant, {
//   through: User_Restaurant,
//   foreignKey: 'user_id'
// })

module.exports = User_Restaurant;
