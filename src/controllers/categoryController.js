const categoryService = require('../services/categoryService');

const post = async (req, res) => {
  const { name } = req.body;  
  const result = await categoryService.postService({ name });
  return res.status(201).json(result);
};

const get = async (req, res) => {
  const result = await categoryService.getService();
  return res.status(200).json(result);
};

module.exports = {
  post,
  get,
};