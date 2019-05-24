const express = require('express');
const router = express.Router();
const db = require('../config/db');

const Restaurant = require('../models/restaurant');

/*
since /restaurant is being pointed to this file, 
get '/' will refer to /restaurant
*/
module.exports = router;
