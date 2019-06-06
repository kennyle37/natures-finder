'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_restaurants', [{
      restaurant_id: 1,
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      restaurant_id: 1,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(), 
    }, {
      restaurant_id: 2,
      user_id: 2,
      created_at: new Date(),
      updated_at: new Date(), 
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_restaurants', [{
      id: 1,
    }, {        
      id: 2,
    }, {
      id: 3,
    }])
  }
};
