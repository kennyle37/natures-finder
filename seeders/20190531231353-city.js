'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('cities', [{
      city_name: 'Castro Valley',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }
    , {
      city_name: 'San Francisco',
      state_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      city_name: 'Seattle',
      state_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', [
      {
        city_name: 'Castro Valley',
        state_id: 1,
      }, 
      {
        city_name: 'San Francisco',
        state_id: 1,
      }, {
        city_name: 'Seattle',
        state_id: 2,
      }], {});
  },  
};
