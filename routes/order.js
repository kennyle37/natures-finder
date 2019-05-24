const express = require('express');
const router = express.Router();
const db = require('../config/db');

const order = require('../models/order');

/*
since /order is being pointed to this file, 
get '/' will refer to /order
*/

module.exports = router;
