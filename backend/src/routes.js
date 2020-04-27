const express = require('express');
const routes = express.Router();
const qaController = require('./controllers/qaController');

routes.post('/', qaController.store);
routes.get('/',qaController.listAll);
routes.get('/diagcat',qaController.DiagnostcCategories);

module.exports = routes;