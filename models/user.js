const Sequelize = require('sequelize');
const db = require('../config/db');

const Address = require('../models/address');

const User = db.define('User', {
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
    // reviews_id: {

    // }
  }, 
  {
    underscored: true
  }
);

//connects user to Address
//insert Address_id to User
User.belongsTo(Address, {as: 'Address', foreignKey: 'address_id'}); 

module.exports = User;