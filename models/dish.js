const Sequelize = require('sequelize');
const db = require('../config/db');

const Order = require('./order');

const Dish = db.define('dish', {
  dish_name: {
    type: Sequelize.STRING
  },
  dish_cost: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  }
},
  {
    underscored: true
  }
)

Dish.belongsTo(Order, {
  foreignKey: 'order_id',
  targetKey: 'id'
})

module.exports = Dish;
