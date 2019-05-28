const express = require('express');
const router = express.Router();
const db = require('../config/db');

const state = require('../models/state');

/*
since /state is being pointed to this file, 
get '/' will refer to /state
*/

//find all states
router.get('/', (req, res) => {
  state.findAll()
    .then(states => {
      console.log('These are our states', states);
      res.status(200).send('These are our states');
    })
    .catch(err => {
      res.status(400).send('Unable to find states', err);
    })
})

//find one state
router.get('/search', (req, res) => {
  state.findOne({
    where: {
      state_name: req.query.state_name
    }
  })
  .then(state => {
    console.log('This is our state', state.get({
      plain:true
    }))
    res.status(200).send('Found state!', state);
  })
  .catch(err => {
    res.status(400).send('Unable to find state');
    console.log(err)
  })
})

//create a state
router.post('/', (req, res) => {
  state.findOrCreate({
    where: {
      state_name: req.query.state_name,
    }
  })
  .spread((state, created) => {
    console.log(state.get({
      plain: true
    }))
    if (created) {
      res.json('State created');
    } else {
      res.json('State already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create state')
    console.error(err);
  })
})

//update a state
router.patch('/', (req, res) => {
  state.findOne({
    where: {
      state_name: req.query.old_state_name
    }
  })
  .then(state => {
    state.update({
      state_name: req.query.new_state_name
    })
  })
  .then(state => {
    res.json('State is now updated')
  })
  .catch(err => {
    res.status(400).send('Unable to update state');
    console.log(err);
  })
})

//delete a state
router.delete('/', (req, res) => {
  state.findONe({
    where: {
      state_name: req.query.state_name
    }
  })
  .then(state => {
    if (state) {
      state.destroy().then(state => {
        res.json('State deleted successfully!')
      })
    } else {
      res.json('Unable to delete state, state does not exist')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete state');
    console.log(err)
  })
})

module.exports = router;