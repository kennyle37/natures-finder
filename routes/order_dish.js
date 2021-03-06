const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const Order_Dish = require('../models/order_dish');
const Order = require('../models/order');
const Dish = require('../models/dish');

/*
since /order_dish is being pointed to this file, 
get '/' will refer to /order_dish
*/

//serialize order_dish
function orderDishSerializer(req, orderDish) {
  const { id, dish_id, order_id, createdAt, updatedAt} = orderDish;

  return {
    id,
    dish_id,
    order_id, 
    createdAt,
    updatedAt
  }
}

//find all Order_Dish
router.get('/', (req, res) => {
  Order_Dish.findAll()
    .then(orderDishes => {
      serialize(req, orderDishes, orderDishSerializer).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find order dish', err);
    })
})

//find one order_dish
router.get('/search', (req, res) => {
  Order_Dish.findOne({
    where: {
      dish_id: req.query.dish_id,
      order_id: req.query.order_id
    }
  })
  .then(orderDish => {
    serialize(req, orderDish, orderDishSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find order dish');
    console.log(err)
  })
})

//create a order_dish
router.post('/', (req, res) => {
  Promise.all([
    Order.findOrCreate({
      where: {
        id: req.query.order_id
      }
    }), 
    Dish.findOrCreate({
      where: {
        id: req.query.dish_id
      }
    })
  ])
  .then(([order, dish]) => {
    const dishCost = Number(dish[0].getDataValue('dish_cost'));
    const originalCost = Number(order[0].getDataValue('cost'));
    const updatedCost = dishCost + originalCost;
    
    return Promise.all([
      order[0].update({
        cost: updatedCost
      }),
      Order_Dish.create({
        order_id: order[0].id,
        dish_id: dish[0].id
      })
    ]).then(([order, dish]) => {
      res.status(200).send('Order_Dish created!');
    })
  })
  .catch(err => {
    res.status(400).send('Unable to create Order_Dish');
    console.error(err)
  })
})

//update a order_dish
router.patch('/', (req, res) => {
  Order_Dish.update({
    dish_id: req.query.updated_dishes_id,
    order_id: req.query.updated_order_id
  }, {
    where: {
      dish_id: req.query.original_dishes_id,
      order_id: req.query.original_order_id
    },
    returning: true
  }).then(orderDish => {
    serialize(req, orderDish[1], orderDishSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update order dish');
    console.error(err);
  })
})

//delete a order_dish
router.delete('/', (req, res) => {
  Order_Dish.destroy({
    where: {
      id: req.query.id
    }
  })
  .then(orderDish => {
    if (orderDish) {
      res.json('Order dish deleted successfully!')
    } else {
      res.json('Unable to delete order dish, order dish does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete order dish');
    console.error(err)
  })
})

module.exports = router;
