const express = require('express');
const router = express.Router();
const db = require('../config/db');
const serialize = require('express-serializer');

const User_Restaurant = require('../models/user_restaurant');

function userRestaurantSerializer(req, userRestaurant) {
  const { 
    id, 
    restaurant_id,
    user_id,
    createdAt, 
    updatedAt 
  } = userRestaurant;

  return {
    id, 
    restaurant_id,
    user_id,
    createdAt, 
    updatedAt 
  }
}

//find all User_Restaurant
router.get('/', (req, res) => {
  User_Restaurant.findAll()
    .then(userRestaurants => {
      serialize(req, userRestaurants, userRestaurantSerializer).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find user restaurant', err);
    })
})

//find one user_restaurant_order
router.get('/search', (req, res) => {
  User_Restaurant.findOne({
    where: {
      id: req.query.id
    }
  })
  .then(userRestaurant => {
    serialize(req, userRestaurant, userRestaurantSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find user restaurant');
    console.log(err)
  })
})

//create a user_restaurant_order
router.post('/', (req, res) => {
  User_Restaurant.create({
    restaurant_id: req.query.restaurant_id,
    user_id: req.query.user_id,
  })
  .spread((userRestaurant, created) => {
    console.log(userRestaurant.get({
      plain: true
    }))
    if (created) {
      res.json('user restaurant created');
    } else {
      res.json('user restaurant already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create user restaurant')
    console.error(err);
  })
})

//update a user_restaurant_order
router.patch('/', (req, res) => {
  User_Restaurant.update({
    restaurant_id: req.query.updated_restaurant_id,
    user_id: req.query.updated_user_id,
  }, {
    where: {
      restaurant_id: req.query.original_restaurant_id,
      user_id: req.query.original_user_id,
    },
    returning: true
  }).then(userRestaurant => {
    serialize(req, userRestaurant[1], userRestaurantSerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update user restaurant');
    console.error(err);
  })
})

//delete a user_restaurant_order
router.delete('/', (req, res) => {
  User_Restaurant.destroy({
    where: {
      id: req.query.id
    }
  })
  .then(userRestaurant => {
    if (userRestaurant) {
      res.json('User restaurant deleted successfully!')
    } else {
      res.json('Unable to delete user restaurant, user restaurant does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete user restaurant');
    console.error(err)
  })
})

module.exports = router;