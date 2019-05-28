const express = require('express');
const router = express.Router();
const db = require('../config/db');

const dining_cateogry = require('../models/dining_category');

/*
since /dining_cateogry is being pointed to this file, 
get '/' will refer to /dining_cateogry
*/

//find all dining_cateogry

//find one dining_cateogry

//create a dining_cateogry

//update a dining_cateogry

//delete a dining_cateogry

module.exports = router;