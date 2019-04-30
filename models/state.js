const Sequelize = require('sequelize');
const db = require('../config/db');

const State = db.define('state', {
  name: {
    type: Sequelize.STRING,
    // validate: {
    //   notNull: true
    // }
  },
})

module.exports = State;
