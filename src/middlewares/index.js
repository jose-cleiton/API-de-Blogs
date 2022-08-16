const errorMiddleware = require('./errorMiddleware');
const authMiddleware = require('./authMiddleware');
const errorHandler = require('./errorHandler');
const validateName = require('./validateName');
const validateLogin = require('./validateLogin');
const validateError = require('./validateError');
const validateTcc = require('./validateTcc');

module.exports = { 
  errorMiddleware, 
  authMiddleware,
  errorHandler,
  validateName,
  validateLogin,
  validateError,
  validateTcc,
 };