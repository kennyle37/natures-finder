const express = require('express');
const router = express.Router();
const serialize = require('express-serializer');
const db = require('../config/db');

const Address = require('../models/address');
const City = require('../models/city');
const State = require('../models/state');

/*
since /address is being pointed to this file, 
get '/' will refer to /address
*/

//serialize address
function serializeAddress(req, address) {
  const { id, address_1, address_2, state_id, city_id, zipcode, createdAt, updatedAt } = address;

  return {
    id,
    address_1,
    address_2,
    state_id,
    city_id,
    zipcode,
    createdAt, 
    updatedAt
  };
}

//find all addresses
router.get('/', (req, res) => {
  Address.findAll()
    .then(addresses => {
      serialize(req, addresses, serializeAddress).then(json => {
        res.status(200).send(json);
      })
    })
    .catch(err => {
      res.status(400).send('Could not find any addresses');
      console.log(err);
    })
})

//find an address
router.get('/search', (req, res) => {
  Address.findOne({
    where: {
      address_1: req.query.address_1,
      zipcode: req.query.zipcode
    }
  })
  .then(address => {
    serialize(req, address, serializeAddress).then(json => {
      res.status(200).send(json);
    })
  })
  .catch(err => {
    res.status(400).send('Address could not be found');
    console.log(err);
  })
})

//create an address
router.post('/', (req, res) => {
  Address.findOrCreate({
    where: {
      address_1: req.query.address_1,
      zipcode: req.query.zipcode,
      state_id: req.query.state_id,
      city_id: req.query.city_id
    },
    defaults: {
      address_2: req.query.address_2,
    },
    include: [ City, State ]
  })
  .spread((address,created) => {
    console.log(address.get({
      plain: true
    }))
    if (created) {
      res.json('Address added!');
    } else {
      res.json('Address already exist');
    }
  })
  .catch(err => {
    res.status(400).send('Unable to create address');
    console.log(err);
  })
})

//update an address
router.patch('/', (req, res) => {
  Address.update({
    address_1: req.query.updated_address_1,
    address_2: req.query.updated_address_2,
    zipcode: req.query.updated_zipcode
  }, {
    where : {
      address_1: req.query.original_address_1,
      address_2: req.query.original_address_2,
      zipcode: req.query.original_zipcode,
      state_id: req.query.state_id,
      city_id: req.query.city_id
    },
    returning: true,
  }).then(address => {
    serialize(req, address[1], serializeAddress).then(json => {
      res.status(200).send(json);
    })
  })
    .catch(err => {
      res.status(400).send('Unable to update address');
      console.log(err);
    })
})

//delete an adress
router.delete('/', (req, res) => {
  Address.destroy({
    where: {
      address_1: req.query.address_1,
      address_2: req.query.address_2,
      zipcode: req.query.zipcode,
      state_id: req.query.state_id,
      city_id: req.query.city_id
    }
  })
  .then(address => {
    if (address) {
      res.json('Address deleted successfully!')
    } else {
      res.json('Unable to delete address, address does not exist!')
    }
  })
  .catch(err => {
    res.status(400).send('Unable to delete Address');
    console.log(err)
  })

})

module.exports = router;
