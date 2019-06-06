const express = require('express');
const router = express.Router();
const db = require('../config/db');
const serialize = require('express-serializer');

const User_Order = require('../models/user_order');

function userOrderSerializer(req, userOrder) {
  const { 
    id, 
    order_id,
    user_id,
    createdAt, 
    updatedAt 
  } = userOrder;

  return {
    id, 
    order_id,
    user_id,
    createdAt, 
    updatedAt 
  }
}

//find all User_Order
router.get('/', (req, res) => {
  User_Order.findAll()
    .then(userOrders => {
      serialize(req, userOrders, userOrderSerializer).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find user order', err);
    })
})

//find one user_order
router.get('/search', (req, res) => {
  User_Order.findOne({
    where: {
      id: req.query.id
    }
  })
  .then(userOrder => {
    serialize(req, userOrder, userOrderSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find user order');
    console.log(err)
  })
})

//create a user_order
router.post('/', (req, res) => {
  User_Order.create({
    order_id: req.query.order_id,
    user_id: req.query.user_id,
  })
  .then(([userOrder, created]) => {
    console.log(userOrder.get({
      plain: true
    }))
    if (created) {
      res.json('user order created');
    } else {
      res.json('user order already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create user order')
    console.error(err);
  })
})



//update a user_order
router.patch('/', (req, res) => {
  User_Order.update({
    order_id: req.query.updated_order_id,
    user_id: req.query.updated_user_id,
  }, {
    where: {
      order_id: req.query.original_order_id,
      user_id: req.query.original_user_id,
    },
    returning: true
  }).then(userOrder => {
    serialize(req, userOrder[1], userOrderSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update user order');
    console.error(err);
  })
})

//delete a user_order
router.delete('/', (req, res) => {
  User_Order.destroy({
    where: {
      id: req.query.id
    }
  })
  .then(userOrder => {
    if (userOrder) {
      res.json('User order deleted successfully!')
    } else {
      res.json('Unable to delete user order, user order does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete user order');
    console.error(err)
  })
})

module.exports = router;