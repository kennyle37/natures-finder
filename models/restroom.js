const Sequelize = require('sequelize');
const db = require('../config/db');

const Restroom = db.define('Restroom', {
  // avg_rating: {

  // },
  name: {
    type: Sequelize.STRING,
    validate: {
      is: ["^[a-z]+$",'i'], //only allow letters
      notEmpty: true, 
    }
  },
  orientation: {
    type: Sequelize.STRING,
  },
  payment_requirement: {
    type: Sequelize.BOOLEAN,
  },
  payment_id: {

  },
  review_id: {

  },
  restroom_type: {
    type: Sequelize.STRING,
    validate: {
      isArray: true,
    }
  }
})