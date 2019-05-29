const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const state = require('../models/state');

/*
since /state is being pointed to this file, 
get '/' will refer to /state
*/

//serialize state
function serializeState(req, state) {
  const { id, state_name, country_id, createdAt, updatedAt} = state;
  
  return {
    id,
    state_name,
    country_id,
    createdAt,
    updatedAt
  };
}

//find all states
router.get('/', (req, res) => {
  state.findAll()
    .then(states => {
      serialize(req, states, serializeState).then(json => {
        res.status(200).send(json);
      })
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
    serialize(req, state, serializeState).then(json => {
      res.status(200).send(json);
    })
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
    serialize(req, state, serializeState).then(json => {
      res.status(200).send(json);
    })
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