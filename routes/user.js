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
      console.log('These are the users', users);
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(400).send('Unable to find users');
      console.log(err)
    })
  );

//find one user by email
router.get('/search', (req, res) => {
  User.findOne({
    where: {
      email: req.query.email
    }
  })
  .then(user => {
    console.log('User found!', user.get({
      plain: true
    }));
    res.sendStatus(200);
  })
  .catch(err => {
    res.status(400).send('Unable to find user', err);
  })
})

//find a user, if they don't exist, create them.
router.post('/create', (req, res) => {
  User.findOrCreate({ 
    where: { 
      email: req.query.email,
    },
    defaults: { 
      first_name: req.query.first_name,
      last_name: req.query.last_name
    }
  })
    .spread((user, created) => {
      console.log(user.get({
        plain: true
      }))
      if (created) {
        res.json('User added!');
      } else {
        res.json('Email already in use!');
      }
    })
    .catch(err => {
      res.status(400).send('Unable to create user')
      console.error(err)
    })
})

//update a user
router.patch('/', (req, res) => {
  User.findOne({
    where: {
      email: req.query.original_email
    }
  }).then(user => {
    user.update({
      email: req.query.updated_email,
      first_name: req.query.first_name,
      last_name: req.query.last_name
    })
    .then(user => {
      res.json('User is now updated')
    })
  })
    .catch(err => {
      res.status(400).send('Unable to update user!')
      console.log(err)
    })
})

//delete a user
router.delete('/', (req, res) => {
  User.findOne({ 
    where: { 
      email: req.query.email 
    }
  })
    .then(user => {
      if (user) {
        user.destroy().then(user => {
          res.json('User deleted sucessfully!')
        })
      } else {
        res.json('Unable to delete user, user does not exist')
      }
    })
    .catch(err => {
      res.status(400).send('Unable to delete user!')
      console.log(err)
    })
})

module.exports = router;
