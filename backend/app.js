// app.js

const express = require('express');
const app = express();
const db = require('./db'); 



// Your routes and other configurations go here

app.get('/', (req, res) => {
  res.send('Hello, this is the root route!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
