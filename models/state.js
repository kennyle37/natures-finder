const Sequelize = require('sequelize');
const db = require('../config/db');

const State = db.define('State', {
  name: {
    type: Sequelize.STRING,
    // validate: {
    //   notNull: true
    // }
  },
})

module.exports = State;
