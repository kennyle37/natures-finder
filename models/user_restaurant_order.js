const Sequelize = require('sequelize');
const db = require('../config/db');

const User = require('./user');
const Order = require('./order');
const Restaurant = require('./restaurant');

const User_Restaurant_Order = db.define('user_restaurant_orders', {}, {
  underscored: true
});

Restaurant.belongsToMany(User, {
  through: User_Restaurant_Order,
})

User.belongsToMany(Restaurant, {
  through: User_Restaurant_Order
})

User_Restaurant_Order.belongsTo(Order, {
  foreignKey: 'order_id'
})

module.exports = User_Restaurant_Order;
