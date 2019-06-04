const sequelize = require('sequelize');
const db = require('../config/db');

const Order = require('./order');
const Dish = require('./dish');

const Order_Dish = db.define('order_dish', {}, {
  underscored: true
});

Order.hasMany(Dish, {
  through: Order_Dish,
  foreignKey: 'dishes_id'
})

Dish.belongsToMany(Order, {
  through: Order_Dish,
  foreignKey: 'order_id'
})

module.exports = Order_Dish;