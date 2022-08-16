const Joi = require('joi');
const DisplayNameMessage = require('./StaticMessage/DisplayNameMessage');
const EmailMessage = require('./StaticMessage/EmailMessage');
const PasswordMessage = require('./StaticMessage/PasswordMessage');

module.exports = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required()
    .messages(DisplayNameMessage.getMessage),
  email: Joi.string()
    .email()
    .required()
    .messages(EmailMessage.getMessage),
  password: Joi.string()
    .min(6)
    .required()
    .messages(PasswordMessage.getMessage),
  image: Joi.string()
    .required(false),
});
