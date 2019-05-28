const express = require('express');
const router = express.Router();
const db = require('../config/db');

const Country = require('../models/country');

//find all countries
router.get('/', (req, res) => {
  Country.findAll()
    .then(countries => {
      console.log('These are the countries', countries)
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(400).send('Unable to find users');
      console.log(err);
    })
})

//find one country
router.get('/search', (req, res) => {
  Country.findOne({
    where: {
      name: req.query.name
    }
  })
  .then(country => {
    console.log('Found country', country.get({
      plain: true
    }))
    res.sendStatus(200);
  })
  .catch(err => {
    res.status(400).send('Unable to find country', err)
  })
})

//create a country
router.post('/', (req,res) => {
  Country.findOrCreate({
    where: {
      name: req.query.name
    }
  })
  .spread((country, created) => {
    console.log(country.get({
      plain: true
    }))
    if (created) {
      res.json('Country added')
    } else {
      res.json('Country already exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create country');
    console.error(err)
  })
})

//update a country
router.patch('/', (req, res) => {
  Country.findOne({
    where: {
      name: req.query.old_name
    }
  }).then(country => {
    country.undate({
      name: req.query.new_name
    })
    .then(country => {
      res.json('Country is now updated');
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update country');
    console.log(err);
  })
})

//delete a country
router.delete('/', (req, res) => {
  Country.findOne({
    where: {
      name: req.query.name
    }
  })
  .then(country => {
    if (country) {
      country.destroy().then(country => {
        res.json('Country deleted sucessfully!')
      })
    } else {
      res.json('Unable to delete country, country does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete country');
    console.log(err);
  })
})

module.exports = router;