const express = require('express');
const exphb = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('../config/db');

//authenticate and connect to db
db
  .authenticate()
  .then(() => {
    console.log('Success! Database connected')
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  });

//create our table when we connect to db
db
  .sync()
  .then(() => console.log('DATABASE SYNCED!'))
  .catch(err => {
    console.error('Unable to sync database', err);
  })

const app = express();

app.get('/', (req,res) => {
  res.send({ express: 'CONNECTED TO REACT'});
})

//routes for our User
app.use('/user', require('../routes/user'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Success! Connected to port ${PORT}`));

