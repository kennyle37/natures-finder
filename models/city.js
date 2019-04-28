const Sequelize = require('sequelize');
const db = require('../config/db');

const State = require('../models/state');

const City = db.define('City', {
    name: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    underscored: true,
  }
)

//Connect city to State
City.belongsTo(State, {
  foreignKey: 'state_id',
  targetKey: 'id'
}) //create state_id in City

module.exports = City;
