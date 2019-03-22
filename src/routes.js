const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.details);
routes.post('/products', ProductController.create);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;