const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const Dish = require('../models/dish');

//serialize dish
function serializeDish(req, dish) {
  const { id, dish_name, dish_cost, createdAt, updatedAt} = dish;

  return {
    id, 
    dish_name, 
    dish_cost, 
    createdAt, 
    updatedAt
  }
}

//find all dish
router.get('/', (req, res) => {
  Dish.findAll()
    .then(dishes => {
      serialize(req, dishes, serializeDish).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find dishes', err);
    })
})

//find one dish
router.get('/search', (req, res) => {
  Dish.findOne({
    where: {
      dish_name: req.query.dish_name,
      dish_cost: req.query.dish_cost
    }
  })
  .then(dishes => {
    serialize(req, dishes, serializeDish).then(json => {
      res.status(200).send(json);
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find dish');
    console.error(err)
  })
})

//create a dish
router.post('/', (req, res) => {
  Dish.findOrCreate({
    where: {
      dish_name: req.query.dish_name,
      dish_cost: req.query.dish_cost
    }
  })
  .then(([dish, created]) => {
    console.log(dish.get({
      plain: true
    }))
    if (created) {
      res.json('dish created');
    } else {
      res.json('dish already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create dish')
    console.error(err);
  })
})

//update a dish
router.patch('/', (req, res) => {
  Dish.update({
    dish_name: req.query.updated_dish_name,
    dish_cost: req.query.updated_dish_cost
  }, {
    where: {
      dish_name: req.query.original_dish_name,
      dish_cost: req.query.original_dish_cost
    },
    returning: true
  })
  .then(dish => {
    serialize(req, dish[1], serializeDish).then(json => {
      res.status(200).send(json);
    })
  })

  .catch(err => {
    res.status(400).send('Unable to update dish');
    console.log(err);
  })
})

//delete a dish
router.delete('/', (req, res) => {
  Dish.destroy({
    where: {
      dish_name: req.query.dish_name,
      dish_cost: req.query.dish_cost
    }
  })
  .then(dish => {
    if (dish) {
      res.json('Dish deleted successfully!')
    } else {
      res.json('Unable to delete dish, dish does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete dish');
    console.log(err)
  })
})

module.exports = router;