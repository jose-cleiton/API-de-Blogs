const express = require('express');
const rescue = require('express-rescue');
const { 
  post,
  get,
  getById,
  exclude,
 } = require('../controllers/userController');
const { authMiddleware, validateError } = require('../middlewares');

const userRoute = express.Router();

userRoute.post('/user', validateError, rescue(post));
userRoute.get('/user', authMiddleware, rescue(get));
userRoute.get('/user/:id', authMiddleware, rescue(getById));
userRoute.delete('/user/me', authMiddleware, rescue(exclude));

module.exports = { userRoute };