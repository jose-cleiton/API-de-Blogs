const { verifyCategories } = require('../helpers');
const { PostCategory } = require('../database/models');
const postService = require('../services/postService');

const msg = 'Some required fields are missing';

const CATEGORYIDS_NOT_FOUND = '"categoryIds" not found';
const POST_DOES_NOT_EXISIT = 'Post does not exist';
const UNAUTHORIZED_USER = 'Unauthorized user';
const CATEGORIES_CANNOT_BE_EDITED = 'Categories cannot be edited';
const create = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { tokenData } = req;

    const result = await verifyCategories(req.body);
    if (!result) return res.status(400).json({ message: CATEGORYIDS_NOT_FOUND });

    const newResult = await postService.creatService(title, content, categoryIds, tokenData);

    await Promise.all(categoryIds
      .map((id) => PostCategory
      .create({ postId: newResult.dataValues.id, categoryId: id })));
    return res.status(201).json(newResult);
};

const get = async (_req, res) => {
  const result = await postService.getService();  
  return res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const resul = await postService.getService();
  const result = resul.some((post) => post.id === +id);
  if (!result) return res.status(404).json({ message: POST_DOES_NOT_EXISIT });
  
  const post = await postService.getByIdService(id);
  return res.status(200).json(post);
}; 

const put = async (req, res) => {
  const { tokenData } = req;
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;

  if (tokenData.id !== +id) return res.status(401).json({ message: UNAUTHORIZED_USER });

  if (categoryIds) return res.status(400).json({ message: CATEGORIES_CANNOT_BE_EDITED });
  
  if (!title || !content) return res.status(400).json({ message: msg });

  await postService.updatedService(id, title, content, categoryIds);

  const result = await postService.getByIdService(id);

  return res.status(200).json(result);
}; 

const exclude = async (req, res) => {
  const { tokenData } = req;
  const { id } = req.params;
  const resul = await postService.getService();
  const result = resul.some((post) => +post.id === +id);

  if (!result) return res.status(404).json({ message: POST_DOES_NOT_EXISIT });

  const test = resul
    .some(({ dataValues }) => +dataValues.userId === +tokenData.id && +dataValues.id === +id);  
    
  if (!test) return res.status(401).json({ message: UNAUTHORIZED_USER });
  await postService.deleteService(id);
  return res.status(204).end();
}; 

const postSearch = async (req, res) => {
    const { q } = req.query;
    const result = await postService.postSearch(q);
  
    return res.status(200).json(result);
  };

module.exports = {
  create,
  get,
  getById,
  put,
  exclude,
  postSearch,
};
