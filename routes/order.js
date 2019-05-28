const express = require('express');
const router = express.Router();
const db = require('../config/db');

const Order = require('../models/order');

/*
since /order is being pointed to this file, 
get '/' will refer to /order
*/

//find all /order
router.get('/', (req, res) => {
  Order.findAll()
    .then(orders => {
      console.log('These are our orders', orders);
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(400).send('Unable to find orders');
      console.log(err);
    })
})

//find one /order 

//create a /order 

//update a /order 

//delete a /order 

module.exports = router;
