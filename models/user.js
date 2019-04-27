const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  // address_id : {

  // },
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
  },
  // reviews_id: {

  // }
  // tableName: 'Users'
});

module.exports = User;