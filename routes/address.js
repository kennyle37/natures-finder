const express = require('express');
const router = express.Router();
const db = require('../config/db');

const Address = require('../models/address');


/*
since /address is being pointed to this file, 
get '/' will refer to /address
*/

module.exports = router;