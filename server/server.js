const express = require('express');
const exphb = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../config/db');
const Payment = require('../models/payment');
const Restroom = require('../models/restroom');

//authenticate and connect to db
db
  .authenticate()
  .then(() => {
    console.log('Success! Database connected');
    db.sync().then(() => {
      console.log('db synced!')
    })
    .catch(err => {
      console.error('could not sync db', db);
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
app.use('/user', require('../routes/user'))


