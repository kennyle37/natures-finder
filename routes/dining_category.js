const express = require('express');
const router = express.Router();
const db = require('../config/db');

const Dining_Category = require('../models/dining_category');

/*
since /dining_category is being pointed to this file, 
get '/' will refer to /dining_category
*/

//find all dining_category
router.get('/', (req, res) => {
  Dining_Category.findAll()
    .then(diningCategories => {
      console.log('These are our diningCategories', diningCategories);
      res.status(200).send('These are our diningCategories');
    })
    .catch(err => {
      res.status(400).send('Unable to find diningCategories', err);
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
    console.log('This is our diningCategory', diningCategory.get({
      plain:true
    }))
    res.status(200).send('Found diningCategory!', diningCategory);
  })
  .catch(err => {
    res.status(400).send('Unable to find diningCategory');
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
  .spread((diningCategory, created) => {
    console.log(diningCategory.get({
      plain: true
    }))
    if (created) {
      res.json('diningCategory created');
    } else {
      res.json('diningCategory already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create diningCategory')
    console.error(err);
  })
})

//update a dining_category
router.patch('/', (req, res) => {
  Dining_Category.findOne({
    where: {
      name: req.query.old_name
    }
  })
  .then(diningCategory => {
    diningCategory.update({
      name: req.query.new_name
    })
  })
  .then(diningCategory => {
    res.json('Dining_Category is now updated')
  })
  .catch(err => {
    res.status(400).send('Unable to update diningCategory');
    console.log(err);
  })
})

//delete a dining_category
router.delete('/', (req, res) => {
  Dining_Category.findOne({
    where: {
      name: req.query.name
    }
  })
  .then(diningCategory => {
    if (diningCategory) {
      diningCategory.destroy().then(diningCategory => {
        res.json('Dining_Category deleted successfully!')
      })
    } else {
      res.json('Unable to delete diningCategory, diningCategory does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete diningCategory');
    console.log(err)
  })
})

module.exports = router;