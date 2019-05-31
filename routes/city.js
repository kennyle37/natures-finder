const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const City = require('../models/city');
const State = require('../models/state');

function serializeCity(req, city) {
  const { id, city_name, state_id, createdAt, updatedAt } = city;

  return {
    id,
    city_name,
    state_id,
    createdAt,
    updatedAt
  }
}

//find all city
router.get('/', (req, res) => {
  City.findAll()
    .then(cities => {
      serialize(req, cities, serializeCity).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find cities', err);
    })
})

//find one city
router.get('/search', (req, res) => {
  City.findOne({
    where: {
      city_name: req.query.city_name,
      state_id: req.query.state_id
    }
  })
  .then(city => {
    serialize(req, city, serializeCity).then(json => {
      res.status(200).send(json);
    })
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
      state_id: req.query.state_id
    },
    include: [ State ]
  })
  .spread((city, created) => {
    console.log(city.get({
      plain: true
    }))
    if (created) {
      res.json('City Created!');
    } else {
      res.json('City already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create city!')
    console.error(err);
  })
})

//update a city
router.patch('/', (req, res) => {
  City.update({
    city_name: req.query.updated_city_name
  }, {
    where: {
      city_name: req.query.original_city_name,
      state_id: req.query.state_id
    },
    returning: true
  })
    .then(city => {
      serialize(req, city[1], serializeCity).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to update city');
      console.log(err);
    })
})

//delete a city
router.delete('/', (req, res) => {
  City.destroy({
    where: {
      city_name: req.query.city_name,
      state_id: req.query.state_id
    }
  })
  .then(city => {
    if (city) {
      res.json('City deleted successfully!')
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
