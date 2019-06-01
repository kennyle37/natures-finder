'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('food_categories', [{
      name: "Korean BBQ",
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: "Ice Cream",
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: "American Food",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteInsert('food_categories', [{
      name: "Korean BBQ",
    }, {
      name: "Ice Cream",
    }, {
      name: "Dim Sum",
    }]);
  }
};
