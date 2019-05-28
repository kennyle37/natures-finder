const express = require('express');
const exphb = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../config/db');
const models = require('../models');

//authenticate and connect to db
db
  .authenticate()
  .then(() => {
    console.log('Success! Database connected');
    db.sync({ force: true }).then(() => {
      console.log('db synced!')
    })
    .catch(err => {
      console.error('could not sync db', err);
    })
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  });

const app = express();

app.get('/', (req,res) => {
  res.send({ express: 'CONNECTED TO REACT'});
})

//connect to port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Success! Connected to port ${PORT}`)
})

//routes for our User
app.use('/api/user', require('../routes/user'));

//routes for our Address
app.use('/api/address', require('../routes/address'));

//routes for our Order
app.use('/api/order', require('../routes/order'));

//routes for our Restaurant
app.use('/api/restaurant', require('../routes/restaurant'));

//routes for our state
app.use('/api/state', require('../routes/state'));


