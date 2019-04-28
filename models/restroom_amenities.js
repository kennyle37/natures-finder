const Sequelize = require('sequelize');
const db = require('../config/db');

const Amenities = require('./amenities');
const Restroom = require('./restroom');

const restroom_amenities = db.define('restroom_amenities', {
  name: Sequelize.STRING
});

Amenities.belongToMany(Restroom, {
  through: restroom_amenities
})

Restroom.belongToMany(Amenities, {
  through: restroom_amenities
})


module.exports = restroom_amenities;