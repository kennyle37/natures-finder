const express = require('express');
const router = express.Router();
const db = require('../config/db');

const Restaurant = require('../models/restaurant');

/*
since /restaurant is being pointed to this file, 
get '/' will refer to /restaurant
*/

//find all restaurant
router.get('/', (req, res) => {
  Restaurant.findAll()
    .then(restaurants => {
      res.status(200).send('Restaurant found!');
      console.log(restaurants);
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
      name: req.query.name
    }
  })
  .then(restaurant => {
    console.log('Restaurant found', restaurant.get({
      plain:true
    }))
    res.sendStatus(200);
  })
  .catch(err => {
    res.status(400).send('Unable to find restaurant', err);
  });
})

//create a restaurant
router.post('/', (req, res) => {
  Restaurant.findOrCreate({
    where: {
      name: req.query.name
    }
  })
  .spread((restaurant, created) => {
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
  Restaurant.findOne({
    where: {
      name: req.query.old_name
    }
  })
  .then(restaurant => {
    res.json('Restaurant updated')
  })
  .catch(err => {
    res.status(400).send('Unable to update restaurant!')
    console.log(err);
  })
})

//delete a restaurant
router.delete('/', (req, res) => {
  Restaurant.findOne({
    where: {
      name: req.query.name
    }
  })
  .then(restaurant => {
    if (restaurant) {
      restaurant.destroy().then(restaurant => {
        res.json('Restaurant deleted scucessfully!')
      })
    } else {
      res.json('Unable to delete restaurant, restaurant does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete restaurant');
    console.log(err);
  })
})

module.exports = router;
