const express = require('express');
const router = express.Router();
const db = require('../config/db');

const food_category = require('../models/food_category');

/*
since /dining_cateogry is being pointed to this file, 
get '/' will refer to /dining_cateogry
*/

//find all food_category

//find one food_category

//create a food_category

//update a food_category

//delete a food_category

module.exports = router;