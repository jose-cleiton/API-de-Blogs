const express = require('express');

const rescue = require('express-rescue');
const { loginController } = require('../controllers/loginController');
const { validateLogin } = require('../middlewares');

const loginRouter = express.Router();

loginRouter.post('/login', validateLogin, rescue(loginController));

module.exports = { loginRouter };