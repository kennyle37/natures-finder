'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_orders', [{
      user_id: 1,
      order_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 2,
      order_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      user_id: 2,
      order_id: 3,
      created_at: new Date(),
      updated_at: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_orders', [{
      user_id: 1,
      order_id: 1,
    }, {
      user_id: 2,
      order_id: 1,
    }, {
      user_id: 2,
      order_id: 3,
    }])
  }
};
