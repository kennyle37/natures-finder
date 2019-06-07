const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const Dining_Category = require('../models/dining_category');

/*
since /dining_category is being pointed to this file, 
get '/' will refer to /dining_category
*/

function serializeDiningCategory(req, diningCategory) {
  const { id, name, createdAt, updatedAt } = diningCategory;

  return {
    id,
    name,
    createdAt,
    updatedAt
  };
}

//find all dining_category
router.get('/', (req, res) => {
  Dining_Category.findAll()
    .then(diningCategories => {
      serialize(req, diningCategories, serializeDiningCategory).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find dining categories', err);
    })
})

//find one dining_category
router.get('/search', (req, res) => {
  Dining_Category.findOne({
    where: {
      name: req.query.name
    }
  })
  .then(diningCategory => {
    serialize(req, diningCategory, serializeDiningCategory).then(json => {
      res.status(200).send(json);
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find dining category');
    console.log(err)
  })
})

//create a dining_category
router.post('/', (req, res) => {
  Dining_Category.findOrCreate({
    where: {
      name: req.query.name,
    }
  })
  .then(([diningCategory, created]) => {
    console.log(diningCategory.get({
      plain: true
    }))
    if (created) {
      res.json('Dining category created');
    } else {
      res.json('Dining category already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create dining category')
    console.error(err);
  })
})

//update a dining_category
router.patch('/', (req, res) => {
  Dining_Category.update({
    name: req.query.updated_name
  }, {
    where: {
      name: req.query.original_name
    },
    returning: true
  }).then(diningCategory => {
    serialize(req, diningCategory[1], serializeDiningCategory).then(json => {
      res.status(200).send(json);
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update dining category');
    console.log(err);
  })
})

//delete a dining_category
router.delete('/', (req, res) => {
  Dining_Category.destroy({
    where: {
      name: req.query.name
    }
  })
  .then(diningCategory => {
    if (diningCategory) {
      res.json('Dining category deleted successfully!')
    } else {
      res.json('Unable to delete dining category, dining category does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete dining category');
    console.error(err)
  })
})

module.exports = router;