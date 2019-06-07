'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_dishes', [{
      dish_id: 1,
      order_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      dish_id: 6,
      order_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      dish_id: 3,
      order_id: 1,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      dish_id: 5,
      order_id: 2,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_dishes', [{
      dish_id: 1,
      order_id: 1,
    }, {
      dish_id: 6,
      order_id: 1,
    }, {
      dish_id: 3,
      order_id: 1,
    }, {
      dish_id: 5,
      order_id: 2,
    }], {});
  }
};
