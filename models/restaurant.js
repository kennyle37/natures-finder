const Sequelize = require('sequelize');
const db = require('../config/db');

const Food_Category = require('./food_category');
const Dining_Category = require('./dining_category');
const Address = require('./address');

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  }
});

Restaurant.belongsTo(Food_Category, {
  foreignKey: 'food_category_id',
  targetKey: 'id'
});

Restaurant.belongsTo(Dining_Category, {
  foreignKey: 'dining_category_id',
  targetKey: 'id'
});

Restaurant.belongsTo(Address, {
  foreignKey: 'address_id',
  targetKey: 'id'
})

module.exports = Restaurant;
