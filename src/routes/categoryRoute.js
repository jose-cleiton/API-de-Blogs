const express = require('express');
const rescue = require('express-rescue');
const { 
  post,
  get,
} = require('../controllers/categoryController');
const { authMiddleware, validateName } = require('../middlewares');

const categoryRoute = express.Router();

categoryRoute.post('/categories', authMiddleware, validateName, rescue(post));
categoryRoute.get('/categories', authMiddleware, rescue(get));

module.exports = { categoryRoute };