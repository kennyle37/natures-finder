const Sequelize = require('sequelize');
const db = require('../config/db');

const Payment = require('./payment');

const Restroom = db.define('restroom', {
  // avg_rating: {

  // },
  name: {
    type: Sequelize.STRING,
    // validate: {
    //   is: ["^[a-z]+$",'i'], //only allow letters
    //   notEmpty: true, 
    // }
  },
  orientation: {
    type: Sequelize.STRING,
  },
  payment_requirement: {
    type: Sequelize.BOOLEAN,
  },
  restroom_type: {
    type: Sequelize.STRING,
    // validate: {
    //   isArray: true,
    // }
  }
})

// Restroom.hasOne(Payment, {
//   foreignKey: "restroom_id"
// })

module.exports = Restroom;