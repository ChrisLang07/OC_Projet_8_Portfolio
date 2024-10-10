const express = require('express');
const formRoute = require('./routes/form');

const app = express();
app.use(express.json());

app.use('/api/form', formRoute);

module.exports = app;