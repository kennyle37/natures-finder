const Sequelize = require('sequelize');
const db = require('../config/db');

const State = require('./state');

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
//create state_id in City
City.belongsTo(State, {
  foreignKey: 'state_id',
  targetKey: 'id'
}) 

module.exports = City;
