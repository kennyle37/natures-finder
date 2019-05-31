const Sequelize = require('sequelize');
const db = require('../config/db');

const Country = require('./country');

const State = db.define('state', {
  state_name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
})

State.belongsTo(Country, {
  foreignKey: 'country_id',
  targetKey: 'id'
})

Country.hasMany(State, {
  foreignKey: 'country_id'
})

module.exports = State;
