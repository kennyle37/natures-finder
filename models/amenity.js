const Sequelize = require('sequelize');
const db = require('../config/db');

const Amenity = db.define('amenity', {
  type: {
    type: Sequelize.STRING
  }
})

module.exports = Amenity;