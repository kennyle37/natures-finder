/* Export file to make sure all models get created */

const address = require('./address');
const city = require('./city');
const state = require('./state');
const user = require('./user');
const country = require('./country');
const order = require('./order');
const dish = require('./dish');
const restaurant = require('./restaurant');
const food_category = require('./food_category');
const dining_category = require('./dining_category');
const User_Restaurant = require('./User_Restaurant');
const order_dish = require('./order_dish');

module.exports = {
  address,
  city,
  state,
  country,
  user,
  order,
  dish,
  restaurant,
  food_category,
  dining_category,
  User_Restaurant,
  order_dish
}