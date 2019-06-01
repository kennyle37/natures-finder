'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addresses', [{
      address_1: '3653 Brookdale Blvd',
      address_2: '',
      zipcode: 94546,
      state_id: 1,
      city_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }, {        
      address_1: '1234 Facebook Way',
      address_2: 'Suite 350',
      zipcode: 95555,
      state_id: 1,
      city_id: 2,
      created_at: new Date(),
      updated_at: new Date(),
    }, {        
      address_1: '1234 Microsoft Street',
      address_2: '',
      zipcode: 97887,
      state_id: 2,
      city_id: 3,
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addresses', [{
      address_1: '3653 Brookdale Blvd',
      address_2: '',
      zipcode: 94546,
      state_id: 1,
      city_id: 1,
    }, {        
      address_1: '1234 Facebook Way',
      address_2: 'Suite 350',
      zipcode: 95555,
      state_id: 1,
      city_id: 2,
    }, {        
      address_1: '1234 Microsoft Street',
      address_2: '',
      zipcode: 97887,
      state_id: 2,
      city_id: 3,
    }], {});
  }
};
