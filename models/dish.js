const Sequelize = require('sequelize');
const db = require('../config/db');

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

module.exports = Dish;
