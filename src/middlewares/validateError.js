const { userSchema } = require('../helpers');

const validateError = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  next();
};

module.exports = validateError;