const Sequelize = require('sequelize');
const db = require('../config/db');

const Order = require('./order');

const Dish = db.define('dish', {
  dish_name: {
    type: Sequelize.STRING
  },
  cost: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  }
})

Dish.belongsTo(Order, {
  foreignKey: 'order_id',
  targetKey: 'id'
})

module.exports = Dish;