'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('orders', [{
     cost: 50.62,
     tips: 2.00,
     rating: 5,
     date: new Date(),
     restaurant_id: 1,
     created_at: new Date(),
     updated_at: new Date()
   }, {
    cost: 22.15,
    tips: 2,
    rating: 5,
    date: new Date(),
    restaurant_id: 1,
    created_at: new Date(),
    updated_at: new Date()
   }, {
    cost: 7,
    tips: 0,
    rating: 5,
    date: new Date(),
    restaurant_id: 3,
    created_at: new Date(),
    updated_at: new Date()
   }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', [{
      cost: 50.62,
      tips: 2.00,
      rating: 5,
      restaurant_id: 1,
    }, {
     cost: 22.15,
     tips: 2,
     rating: 5,
     restaurant_id: 1,
    }, {
     cost: 7,
     tips: 0,
     rating: 5,
     restaurant_id: 3,
    }])
  }
};
