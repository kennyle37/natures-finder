const express = require('express');
const router = express.Router();
const db = require('../config/db');
const serialize = require('express-serializer');

const User_Restaurant_Order = require('../models/user_restaurant_order');

function userRestaurantOrderSerializer(req, userRestaurantOrder) {
  const { 
    id, 
    restaurant_id,
    user_id,
    order_id, 
    createdAt, 
    updatedAt 
  } = userRestaurantOrder;

  return {
    id, 
    restaurant_id,
    user_id,
    order_id, 
    createdAt, 
    updatedAt 
  }
}

//find all User_Restaurant_Order
router.get('/', (req, res) => {
  User_Restaurant_Order.findAll()
    .then(userRestaurantOrders => {
      serialize(req, userRestaurantOrders, userRestaurantOrderSerializer).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find user restaurant order', err);
    })
})

//find one user_restaurant_order
router.get('/search', (req, res) => {
  User_Restaurant_Order.findOne({
    where: {
      id: req.query.id
    }
  })
  .then(userRestaurantOrder => {
    serialize(req, userRestaurantOrder, userRestaurantOrderSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find user restaurant order');
    console.log(err)
  })
})

//create a user_restaurant_order
router.post('/', (req, res) => {
  User_Restaurant_Order.create({
    restaurant_id: req.query.restaurant_id,
    user_id: req.query.user_id,
    order_id: req.query.order_id
  })
  .spread((userRestaurantOrder, created) => {
    console.log(userRestaurantOrder.get({
      plain: true
    }))
    if (created) {
      res.json('user restaurant order created');
    } else {
      res.json('user restaurant order already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create user restaurant order')
    console.error(err);
  })
})

//update a user_restaurant_order
router.patch('/', (req, res) => {
  User_Restaurant_Order.update({
    restaurant_id: req.query.updated_restaurant_id,
    user_id: req.query.updated_user_id,
    order_id: req.query.updated_order_id
  }, {
    where: {
      restaurant_id: req.query.original_restaurant_id,
      user_id: req.query.original_user_id,
      order_id: req.query.original_order_id
    },
    returning: true
  }).then(userRestaurantOrder => {
    serialize(req, userRestaurantOrder[1], userRestaurantOrderSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update user restaurant order');
    console.error(err);
  })
})

//delete a user_restaurant_order
router.delete('/', (req, res) => {
  User_Restaurant_Order.destroy({
    where: {
      id: req.query.id
    }
  })
  .then(userRestaurantOrder => {
    if (userRestaurantOrder) {
      res.json('User restaurant order deleted successfully!')
    } else {
      res.json('Unable to delete user restaurant order, user restaurant order does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete user restaurant order');
    console.error(err)
  })
})

module.exports = router;