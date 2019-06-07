const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const Restaurant = require('../models/restaurant');
const Food_Category = require('../models/food_category');
const Dining_category = require('../models/dining_category');

/*
since /restaurant is being pointed to this file, 
get '/' will refer to /restaurant
*/

//serialize restaurant
function serializeRestaurant(req, restaurant) {
  const { id, restaurant_name, address_id, dining_category_id, food_category_id } = restaurant;

  return {
    id, 
    restaurant_name,
    address_id,
    dining_category_id,
    food_category_id
  }
}

//find all restaurant
router.get('/', (req, res) => {
  Restaurant.findAll()
    .then(restaurants => {
      serialize(req, restaurants, serializeRestaurant).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find restaurants');
      console.log(err);
    })
})

//find one restaurant
router.get('/search', (req, res) => {
  Restaurant.findOne({
    where: {
      restaurant_name: req.query.restaurant_name
    }
  })
  .then(restaurant => {
    serialize(req, restaurant, serializeRestaurant).then(json => {
      res.status(200).send(json);
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find Restaurant');
    console.error(err)
  })
})

//create a restaurant
router.post('/', (req, res) => {
  Restaurant.findOrCreate({
    where: {
      restaurant_name: req.query.restaurant_name,
    },
    defaults: {
      dining_category_id: req.query.dining_category_id,
      food_category_id: req.query.food_category_id
    },
    include: [ Food_Category, Dining_category ]
  })
  .then(([restaurant, created]) => {
    console.log(restaurant.get({
      plain: true
    }))
    if (created) {
      res.json('Restaurant added');
    } else {
      res.json('Restaurant already exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create restaurant');
    console.error(err);
  })
})

//update a restaurant
router.patch('/', (req, res) => {
  Restaurant.update({
    restaurant_name: req.query.updated_name,
    dining_category_id: req.query.updated_dining_category_id,
    food_category_id: req.query.updated_food_category_id
  }, { 
    where: {
      restaurant_name: req.query.original_name
    },
    returning: true
  })
  .then(restaurant => {
    serialize(req, restaurant[1], serializeRestaurant).then(json => {
      res.status(200).send(json);
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update restaurant!')
    console.log(err);
  })
})

//delete a restaurant
router.delete('/', (req, res) => {
  Restaurant.destroy({
    where: {
      restaurant_name: req.query.restaurant_name
    }
  })
  .then(restaurant => {
    if (restaurant) {
      res.json('Restaurant deleted scucessfully!')
    } else {
      res.json('Unable to delete restaurant, restaurant does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete restaurant');
    console.error(err);
  })
})

module.exports = router;
