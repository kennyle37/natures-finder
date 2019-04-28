const Sequelize = require('sequelize');
const db = require('../config/db');

const Review = require('./review')

const Review_Images = db.define('Review_Images', {
  img_src: {
    type: Sequelize.STRING
  }
})

Review_Images.hasOne(Review, {
  foreign_id: 'review_images_id'
})

module.exports = Review_Images;