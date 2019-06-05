const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const Order = require('../models/order');

//serialize order
function orderSerializer(req, order) {
  const {    
    id, 
    cost, 
    tips, 
    total_cost, 
    rating,
    createdAt, 
    updatedAt
  } = order;

  return {
    id, 
    cost, 
    tips, 
    total_cost, 
    rating,
    createdAt, 
    updatedAt
  }
}

//find all Order
router.get('/', (req, res) => {
  Order.findAll()
    .then(order => {
      serialize(req, order, orderSerializer).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find order', err);
    })
})

//find one order
router.get('/search', (req, res) => {
  Order.findOne({
    where: {
      id: req.query.id
    }
  })
  .then(order => {
    serialize(req, order, orderSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find order');
    console.log(err)
  })
})

//create a order
router.post('/', (req, res) => {
  Order.create({
    cost: req.query.cost,
    tips: req.query.tips,
    total_cost: req.query.total_cost,
    rating: req.query.rating,
    date: req.query.date,
  })
  .spread((order, created) => {
    console.log(order.get({
      plain: true
    }))
    if (created) {
      res.json('order created');
    } else {
      res.json('order already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create order')
    console.error(err);
  })
})

//update a order
router.patch('/', (req, res) => {
  Order.update({
    cost: req.query.updated_cost,
    tips: req.query.updated_tips,
    rating: req.query.updated_rating,
    date: req.query.updated_date,
  }, {
    where: {
      id: req.query.id,
    },
    returning: true
  }).then(order => {
    serialize(req, order[1], orderSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update order');
    console.error(err);
  })
})

//delete a order
router.delete('/', (req, res) => {
  Order.destroy({
    where: {
      id: req.query.id
    }
  })
  .then(order => {
    if (order) {
      res.json('Order deleted successfully!')
    } else {
      res.json('Unable to delete order, order does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete order');
    console.error(err)
  })
})
module.exports = router;
