const express = require('express');
const dotenv = require('dotenv');
const dbConnecttion = require('./config/db');

//Load Config
dotenv.config({ path: './config/config.env'});
//Connect to db
dbConnecttion();
const app = express();

const PORT = process.env.PORT || 4000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)