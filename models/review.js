const Sequelize = require('sequelize');
const db = require('../config/db');

const User = require('./user');

const Review = db.define('review', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  }
});

//connects review to User
Review.belongsTo(User, {
  foreignKey: 'user_id',
  targetKey: 'id'
});

module.exports = Review;
