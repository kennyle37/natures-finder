const express = require('express');
const router = express.Router();
const db = require('../config/db');

const Food_Category = require('../models/food_category');

/*
since /food_category is being pointed to this file, 
get '/' will refer to /food_category
*/

//find all food_category
router.get('/', (req, res) => {
  Food_Category.findAll()
    .then(foodCategories => {
      console.log('These are our foodCategories', foodCategories);
      res.status(200).send('These are our foodCategories');
    })
    .catch(err => {
      res.status(400).send('Unable to find foodCategories', err);
    })
})

//find one food_category
router.get('/search', (req, res) => {
  Food_Category.findOne({
    where: {
      name: req.query.name
    }
  })
  .then(foodCategory => {
    console.log('This is our foodCategory', foodCategory.get({
      plain:true
    }))
    res.status(200).send('Found foodCategory!', foodCategory);
  })
  .catch(err => {
    res.status(400).send('Unable to find foodCategory');
    console.log(err)
  })
})

//create a food_category
router.post('/', (req, res) => {
  Food_Category.findOrCreate({
    where: {
      name: req.query.name,
    }
  })
  .spread((foodCategory, created) => {
    console.log(foodCategory.get({
      plain: true
    }))
    if (created) {
      res.json('foodCategory created');
    } else {
      res.json('foodCategory already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create foodCategory')
    console.error(err);
  })
})

//update a food_category
router.patch('/', (req, res) => {
  Food_Category.findOne({
    where: {
      name: req.query.old_name
    }
  })
  .then(foodCategory => {
    foodCategory.update({
      name: req.query.new_name
    })
  })
  .then(foodCategory => {
    res.json('Food_Category is now updated')
  })
  .catch(err => {
    res.status(400).send('Unable to update foodCategory');
    console.log(err);
  })
})

//delete a food_category
router.delete('/', (req, res) => {
  Food_Category.findOne({
    where: {
      name: req.query.name
    }
  })
  .then(foodCategory => {
    if (foodCategory) {
      foodCategory.destroy().then(foodCategory => {
        res.json('Food_Category deleted successfully!')
      })
    } else {
      res.json('Unable to delete foodCategory, foodCategory does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete foodCategory');
    console.log(err)
  })
})

module.exports = router;