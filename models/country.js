const Sequelize = require('sequelize');
const db = require('../config/db');

const Country = db.define('country', {
  country_name: {
    type: Sequelize.STRING
  }
},  
  {
    underscored: true
  }
)

module.exports = Country;
