const Sequelize = require('sequelize');
const db = require('../config/db');

//connect to start
before((done) => {
  db
    .authenticate()
    .then(() => {
      console.log('Success! Database connected')
    })
    .catch(err => {
      console.error('Unable to connect to database:', err);
    });
});

// //run before each test
// beforeEach((done) => {

// })