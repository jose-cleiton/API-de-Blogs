const express = require('express');
const rescue = require('express-rescue');
const { authMiddleware, validateTcc } = require('../middlewares');
const { 
  create,
  get,
  getById,
  put,
  exclude,
  postSearch,
} = require('../controllers/postController');

const postRoute = express.Router();

postRoute.post('/post', authMiddleware, validateTcc, rescue(create));
postRoute.get('/post', authMiddleware, rescue(get));
postRoute.get('/post/search', authMiddleware, rescue(postSearch));
postRoute.get('/post/:id', authMiddleware, rescue(getById));
postRoute.put('/post/:id', authMiddleware, rescue(put));
postRoute.delete('/post/:id', authMiddleware, rescue(exclude));

module.exports = { postRoute };