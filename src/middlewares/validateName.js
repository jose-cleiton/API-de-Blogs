const NAME_IS_REQUIRED = '"name" is required';
const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: NAME_IS_REQUIRED });

  next();
};

module.exports = validateName;