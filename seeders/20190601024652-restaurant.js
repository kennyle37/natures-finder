'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('restaurants', [{
      name: "Jonga",
      dining_category_id: 2,
      food_category_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: "Uji Time",
      dining_category_id: 3,
      food_category_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: "Lukas",
      dining_category_id: 2,
      food_category_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('restaurants', [{
      name: "Jonga",
    }, {
      name: "Uji Time",
    }, {
      name: "Lukas",
    }]);
  }
};
