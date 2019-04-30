const Sequelize = require('sequelize');
const db = require('../config/db');

const Amenity = require('./amenity');
const Restroom = require('./restroom');

const restroom_amenities = db.define('restroom_amenities', {
  name: Sequelize.STRING
});

Amenity.belongsToMany(Restroom, {
  through: restroom_amenities
})

Restroom.belongsToMany(Amenity, {
  through: restroom_amenities
})


module.exports = restroom_amenities;