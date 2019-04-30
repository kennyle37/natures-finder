const Sequelize = require('sequelize');
const db = require('../config/db');

const State = db.define('state', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
})

module.exports = State;
