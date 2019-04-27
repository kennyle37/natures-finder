const express = require('express');
const router = express.Router();
const db = require('../config/db');
const User = require('../models/user');

//since /user is being pointed to this file, get '/'
//will refer to /user
router.get('/', (req, res) => 
  User.findAll()
    .then(users => {
      console.log('these are the users', users)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
  );

module.exports = router;
