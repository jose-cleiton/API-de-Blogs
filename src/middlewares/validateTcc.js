const SOME_REQUIRED_FILEDS_ARE_MISSING = 'Some required fields are missing';

const validatTcc = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: SOME_REQUIRED_FILEDS_ARE_MISSING }); 
}
return next();
};

module.exports = validatTcc;