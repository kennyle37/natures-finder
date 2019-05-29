const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const User = require('../models/user');

/*
since /user is being pointed to this file, 
get '/' will refer to /user
*/

//Convert user object into json format for postman
function serializeUser (req, user) {
  const { id, email, first_name, last_name, user_restaurant_order_id, createdAt, updatedAt, address_id } = user;
  
  return {
    id,
    email,
    first_name,
    last_name,
    address_id,
    user_restaurant_order_id,
    createdAt,
    updatedAt,
  }
}

//find all users
router.get('/', (req, res) => 
  User.findAll()
    .then(users => {
      serialize(req, users, serializeUser).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to find users');
      console.log(err);
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
    serialize(req, user, serializeUser).then(json => {
      res.status(200).send(json);
    })
  })
  .catch(err => {
    res.status(400).send('Unable to find user', err);
  })
})

//find a user, if they don't exist, create them.
router.post('/', (req, res) => {
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
        res.json('User Sucessfully Added');
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
  User.update({
    email: req.query.updated_email,
    first_name: req.query.updated_first_name,
    last_name: req.query.updated_last_name
  }, {
    where: {
      email: req.query.original_email
    },
    returning: true,
  }).then(user => {
      console.log('THIS IS USER', user)
      serialize(req, user[1], serializeUser).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Unable to update user!');
      console.log(err);
    })
})

//delete a user
router.delete('/', (req, res) => {
  User.destroy({
    where: {
      email: req.query.email
    }
  })
  .then(user => {
    if (user) {
      res.json('User deleted sucessfully!')
    } else {
      res.json('Unable to delete user, user does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete user!')
    console.error(err)
  })
})

module.exports = router;
