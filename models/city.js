const Sequelize = require('sequelize');
const db = require('../config/db');

const State = require('./state');

const City = db.define('city', {
    city_name: {
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

State.hasMany(City, {
  foreignKey: 'state_id'
})

module.exports = City;
