const jwtGenerator = require('../helpers/jwtGenerator');
const userService = require('../services/userService');

const USER_ALREADY_REGISTERED = 'User already registered';
const USER_DOES_NOT_EXIST = 'User does not exist';

const post = async (req, res) => {
  const { displayName, email, password, image } = req.body;  
  const [row, created] = await userService.postService(displayName, email, password, image);

  if (!created) return res.status(409).json({ message: USER_ALREADY_REGISTERED });  
  const token = jwtGenerator({ email: row.dataValues.email });
  return res.status(201).json({ token });
};

const get = async (req, res) => {
  const result = await userService.get();
  
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getById(id);

  if (!result) return res.status(404).json({ message: USER_DOES_NOT_EXIST });
  return res.status(200).json(result);
};

const exclude = async (req, res) => {
  const { id } = req.tokenData;
  await userService.exclude(id);
  return res.status(204).end();
};

module.exports = {
  post,
  get,
  getById,
  exclude,
};
