'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('dishes', [{
      dish_name: 'green tea flavored uji',
      dish_cost: 7.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'beef brisket',
      dish_cost: 5.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'bone marrow burger',
      dish_cost: 12.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'fries',
      dish_cost: 4.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'tofu soup',
      dish_cost: 7.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'coke',
      dish_cost: 3.50,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'tteokbokki',
      dish_cost: 6.99,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dishes', [{
      dish_name: 'green tea flavored uji',
      dish_cost: 7.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'beef brisket',
      dish_cost: 5.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'bone marrow burger',
      dish_cost: 12.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'fries',
      dish_cost: 4.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'tofu soup',
      dish_cost: 7.99,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'coke',
      dish_cost: 3.50,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      dish_name: 'tteokbokki',
      dish_cost: 6.99,
      created_at: new Date(),
      updated_at: new Date(),
    }]);
  }
};
