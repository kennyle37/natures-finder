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
      res.status(400).send('Unable to find food category', err);
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
    res.status(400).send('Unable to find food category');
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
  .then(([foodCategory, created]) => {
    console.log(foodCategory.get({
      plain: true
    }))
    if (created) {
      res.json('food category created');
    } else {
      res.json('food category already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create food category')
    console.error(err);
  })
})

//update a food_category
router.patch('/', (req, res) => {
  Food_Category.update({
    name: req.query.updated_name
  }, {
    where: {
      name: req.query.original_name
    },
    returning: true
  }).then(foodCategory => {
    serialize(req, foodCategory[1], foodCategorySerializer).then(json => {
      res.status(200).send(json)
    })
  })
  .catch(err => {
    res.status(400).send('Unable to update food category');
    console.error(err);
  })
})

//delete a food_category
router.delete('/', (req, res) => {
  Food_Category.destroy({
    where: {
      name: req.query.name
    }
  })
  .then(foodCategory => {
    if (foodCategory) {
      res.json('Food category deleted successfully!')
    } else {
      res.json('Unable to delete food category, food category does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete food category');
    console.error(err)
  })
})

module.exports = router;
