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
const user_restaurant = require('./user_restaurant');
const order_dish = require('./order_dish');
const user_order = require('./user_order');

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
  user_restaurant,
  order_dish,
  user_order
}