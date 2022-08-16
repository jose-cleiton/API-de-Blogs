const { jwtGenerator } = require('../helpers');

const loginService = require('../services/loginService');

const INVALID_FILDS = 'Invalid fields';

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const result = await loginService.postService(email, password);
  if (!result) return res.status(400).json({ message: INVALID_FILDS });
  const token = jwtGenerator({ id: result.id, email });
  return res.status(200).json({ token });
};

module.exports = { loginController };
