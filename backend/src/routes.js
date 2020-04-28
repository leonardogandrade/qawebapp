const express = require('express');
const routes = express.Router();
const qaController = require('./controllers/qaController');
const userController = require('./controllers/userController');

routes.post('/', qaController.store);
routes.get('/',qaController.listAll);
routes.get('/diagcat',qaController.DiagnostcCategories);

//User Routes
routes.post('/user',userController.store);

module.exports = routes;