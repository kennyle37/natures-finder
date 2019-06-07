'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('states', [{
      state_name: 'California',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      state_name: 'Washington',
      country_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('states', [{
    state_name: 'California',
    country_id: 1,
  }, {
    state_name: 'Washington',
    country_id: 1,
  }])
  }
};
