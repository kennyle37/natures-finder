const Sequelize = require('sequelize');
const db = require('../config/db');

const Review = require('./review');

const Rating = db.define('rating', {
  rating: {
    type: Sequelize.INTEGER
  }
})

Rating.hasOne(Review, {
  foreignKey: 'rating_id'
})

module.exports = Rating;
