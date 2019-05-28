const express = require('express');
const router = express.Router();
const db = require('../config/db');

const City = require('../models/city');

//find all city
router.get('/', (req, res) => {
  City.findAll()
    .then(cities => {
      console.log('These are our cities', cities);
      res.status(200).send('These are our cities');
    })
    .catch(err => {
      res.status(400).send('Unable to find cities', err);
    })
})

//find one city
router.get('/search', (req, res) => {
  City.findOne({
    where: {
      city_name: req.query.city_name
    }
  })
  .then(city => {
    console.log('This is our city', city.get({
      plain:true
    }))
    res.status(200).send('Found city!', city);
  })
  .catch(err => {
    res.status(400).send('Unable to find city');
    console.log(err)
  })
})

//create a city
router.post('/', (req, res) => {
  City.findOrCreate({
    where: {
      city_name: req.query.city_name,
    }
  })
  .spread((city, created) => {
    console.log(city.get({
      plain: true
    }))
    if (created) {
      res.json('city created');
    } else {
      res.json('city already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create city')
    console.error(err);
  })
})

//update a city
router.patch('/', (req, res) => {
  City.findOne({
    where: {
      city_name: req.query.old_city_name
    }
  })
  .then(city => {
    city.update({
      city_name: req.query.new_city_name
    })
  })
  .then(city => {
    res.json('City is now updated')
  })
  .catch(err => {
    res.status(400).send('Unable to update city');
    console.log(err);
  })
})

//delete a city
router.delete('/', (req, res) => {
  City.findOne({
    where: {
      city_name: req.query.city_name
    }
  })
  .then(city => {
    if (city) {
      city.destroy().then(city => {
        res.json('City deleted successfully!')
      })
    } else {
      res.json('Unable to delete city, city does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete city');
    console.log(err)
  })
})

module.exports = router;