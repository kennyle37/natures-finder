'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('countries', [{
        country_name: 'United States of America',
        created_at: new Date(),
        updated_at: new Date(),
      }, {        
        country_name: 'Mexico',
        created_at: new Date(),
        updated_at: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('countries', [{
      country_name: 'United States of America',
    }, {        
      country_name: 'Mexico',
    }])
  }
};
