const Sequelize = require('sequelize');
const db = require('../config/db');

const Payment = db.define('payment', {
  payment_type: {
    type: Sequelize.STRING,
  },
  payment_cost: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Payment;
