const { Category } = require('../database/models');

const categoryService = {
 async postService({ name }) {
    const result = await Category.create({ name });
    return result;
  },

async getService() {
    const result = await Category.findAll();
    return result;
  },
};
module.exports = categoryService;
