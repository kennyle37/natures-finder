const Sequelize = require('sequelize');
const db = require('../config/db');

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
  },
  date: {
    type: Sequelize.DATE
  }
}, 
  {
    underscored: true
  }
)

module.exports = Order;