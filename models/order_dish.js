const Sequelize = require('sequelize');
const db = require('../config/db');

const Order = require('./order');
const Dish = require('./dish');

const Order_Dish = db.define('order_dish', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }, 
  order_id: Sequelize.INTEGER,
  dish_id: Sequelize.INTEGER,
}, {
  underscored: true
})

// Order.belongsToMany(Dish, {
//   through: Order_Dish,
//   foreignKey: 'order_id'
// })

// Dish.belongsToMany(Order, {
//   through: Order_Dish,
//   foreignKey: 'dish_id'
// })

module.exports = Order_Dish;
