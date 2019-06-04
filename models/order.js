const Sequelize = require('sequelize');
const db = require('../config/db');

const Dish = require('./dish');

const Order = db.define('order', {
  cost: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  tips: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false
  },
  total_cost: {
    type: Sequelize.DECIMAL(10,2),
    allowNull: false,
    get() {
      const cost = this.getDataValue('cost');
      const tips = this.getDataValue('tips');

      return cost + tips;
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      isInRange(value) {
        if (value < 0 || value > 5) {
          throw new Error('Please enter a rating between 0-5');
        }
      }
    }
  },
  date: {
    type: Sequelize.DATE
  }
}, 
  {
    underscored: true
  }
)

// Order.hasMany(Dish)
// Dish.belongsToMany(Order)

module.exports = Order;