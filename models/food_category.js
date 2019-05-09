const Sequelize = require('sequelize');
const db = require('../config/db');

const Food_Category = db.define('food_category', {
  name: {
    type: Sequelize.STRING
  }
},
  {
    underscored: true
  }
);

module.exports = Food_Category;
