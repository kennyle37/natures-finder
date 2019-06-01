'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('dining_categories', [{
      name: "Fast Food",
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: "Sit Down Restaurant",
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      name: "Dessert",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.deleteInsert('dining_categories', [{
      name: "Fast Food",
    }, {
      name: "Sit Down Restaurant",
    }, {
      name: "Dessert",    }]);
  }
};
