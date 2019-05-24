const express = require('express');
const router = express.Router();
const db = require('../config/db');

const User = require('../models/user');

/*
since /user is being pointed to this file, 
get '/' will refer to /user
*/

//find all users
router.get('/', (req, res) => 
  User.findAll()
    .then(users => {
      console.log('these are the users', users)
      res.sendStatus(200);
    })
    .catch(err => console.log(err))
  );

//create a user
router.post('/create', (req, res) => {
  const user = new User(req.query);
  console.log('this is req.query', req.query)
  user.save()
    .then(user => {
      res.json('User added!');
    })
    .catch(err => {
      res.status(400).send('Unable to save')
    })
});


//update a user

//delete a user

module.exports = router;
