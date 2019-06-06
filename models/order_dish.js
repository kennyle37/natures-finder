const db = require('../config/db');

const Order = require('./order');
const Dish = require('./dish');

const Order_Dish = db.define('order_dish', {}, {
  underscored: true
})

Order.belongsToMany(Dish, {
  through: Order_Dish
})

Dish.belongsToMany(Order, {
  through: Order_Dish
})

module.exports = Order_Dish;
