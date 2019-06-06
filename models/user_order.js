const db = require('../config/db');

const User = require('./user');
const Order = require('./order');

const User_Order = db.define('user_order', {}, {
  underscored: true
})

User.belongsToMany(Order, {
  through: User_Order,
  foreignKey: 'user_id'
})

Order.belongsToMany(User, {
  through: User_Order,
  foreignKey: 'order_id'
})

module.exports = User_Order;
