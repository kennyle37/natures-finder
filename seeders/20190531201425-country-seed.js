'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      create files here
    */

      return queryInterface.bulkInsert('countries', [{
        country_name: 'United States of America',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {        
        country_name: 'Mexico',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
    */
    return queryInterface.bulkDelete('countries', [{
      country_name: 'United States of America',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {        
      country_name: 'Mexico',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  }
};
