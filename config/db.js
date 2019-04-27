//create new instance of sequelize
const Sequelize = require('sequelize');

module.exports = new Sequelize('natures', 'postgres' , '111', {
  host: "localhost",
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  },
})
