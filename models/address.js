const Sequelize = require('sequelize');
const db = require('../config/db');

const City = require('./city');
const State = require('./state');

const Address = db.define('Address', {
    address: {
      type: Sequelize.STRING,
      // validate: {
      //   notEmpty: true
      // }
    },
    address_2: {
      type: Sequelize.STRING
    },
    zip: {
      type: Sequelize.STRING,
      validate: {
        NotEmpty: true,
        is: /^[0-9]*$/
      }
    },
  }, 
  {
    underscored: true
  }
);

//connect address to state
//add state_id as a fkey in address
Address.belongsTo(State, {
  foreignKey: 'state_id',
  targetKey: 'id'
});

//connect address to city
//add city_id as a fkey in address
Address.belongsTo(City, {
  foreignKey: 'city_id',
  targetKey: 'id'
})

module.exports = Address;
