const Sequelize = require('sequelize');
const db = require('../config/db');

const Dining_Category = db.define('dining_category', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
},   
  {
    underscored: true
  }
);

module.exports = Dining_Category;
