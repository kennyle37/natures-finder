const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const Food_Category = require('../models/food_category');

/*
since /food_category is being pointed to this file, 
get '/' will refer to /food_category
*/

//serialize food_category
function foodCategorySerializer(req, foodCategory) {
  const { id, name, createdAt, updatedAt} = foodCategory;

  return {
    id,
    name, 
    createdAt,
    updatedAt
  }
}

//find all food_category
router.get('/', (req, res) => {
  Food_Category.findAll()
    .then(foodCategories => {
      serialize(req, foodCategories, foodCategorySerializer).then(json => {
        res.status(200).send(json);
      })
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
    serialize(req, foodCategory, foodCategorySerializer).then(json => {
      res.status(200).send(json)
    })
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
    serialize(req, foodCategory, foodCategorySerializer).then(json => {
      res.status(200).send(json)
    })
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
