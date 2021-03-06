const express = require('express');

const auth = require('./controllers/auth');
const items = require('./controllers/items');
const scrape = require('./controllers/scrape');
const users = require('./controllers/users');


// Configure the routes on the app
module.exports = async function(app) {
  // Create the API endpoints
  app.use('/api/v1/auth', auth(app));
  app.use('/api/v1/users', users(app));
  app.use('/api/v1/scrape', scrape(app));
  app.use('/api/v1/items', items(app));
};
