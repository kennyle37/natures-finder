//create new instance of sequelize
const Sequelize = require('sequelize');

module.exports = new Sequelize('natures', 'postgres' , '111', {
  host: "localhost",
  dialect: 'postgres',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  },
})
