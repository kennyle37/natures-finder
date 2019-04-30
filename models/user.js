const Sequelize = require('sequelize');
const db = require('../config/db');

const Address = require('./address');

const User = db.define('user', {
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true //convert to function for error checking later
      }
    },
    first_name: {
      type: Sequelize.STRING,
      validate: {
        is: ["^[a-z]+$",'i'], //letters only
        notEmpty: true,
      }
    },
    last_name: {
      type: Sequelize.STRING,
      validate: {
        is: ["^[a-z]+$",'i'], //letters only
        notEmpty: true
      }
    }
  }, 
  {
    underscored: true
  }
);

//connects user to Address
//insert Address_id to User
User.belongsTo(Address, {as: 'Address', foreignKey: 'address_id'});

module.exports = User; 
