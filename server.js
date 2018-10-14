'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = 'localhost';
const msg = `Hello World Running on http://${HOST}:${PORT}`;

// App
const app = express();
app.get('/', (req, res) => {
  res.send(msg);
});

app.listen(PORT, HOST);
console.log(msg);