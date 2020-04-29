const express = require('express');
const routes = express.Router();
const qaController = require('./controllers/qaController');
const userController = require('./controllers/userController');

//Q&A Routes
routes.post('/', qaController.store);
routes.get('/',qaController.listAll);
routes.get('/diagcat',qaController.DiagnostcCategories);
routes.post('/result/:id',qaController.result);

//User Routes
routes.post('/user',userController.store);
routes.post('/auth',userController.authenticate);

module.exports = routes;