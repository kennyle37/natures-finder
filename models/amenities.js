const Sequelize = require('sequelize');
const db = require('../config/db');

const Amenities = db.define('Amenities', {
  type: {
    type: Sequelize.STRING
  }
})

module.exports = Amenities;