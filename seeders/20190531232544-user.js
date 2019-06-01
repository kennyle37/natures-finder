'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      email: 'kennyle37@gmail.com',
      first_name: 'Kenny',
      last_name: 'Le',
      address_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      email: 'victoriatong1013@yahoo.com',
      first_name: 'Victoria',
      last_name: 'Tong',
      address_id: 2,        
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      email: 'cuteshey0927@aim.com',
      first_name: 'Toria',
      last_name: 'Lubbers',
      address_id: 3,    
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', [{
      email: 'kennyle37@gmail.com',
      first_name: 'Kenny',
      last_name: 'Le',
      address_id: 1,
    }, {
      email: 'victoriatong1013@yahoo.com',
      first_name: 'Victoria',
      last_name: 'Tong',
      address_id: 2,        
    }, {
      email: 'cuteshey0927@aim.com',
      first_name: 'Toria',
      last_name: 'Lubbers',
      address_id: 3,    
    }]);  
  }
};

