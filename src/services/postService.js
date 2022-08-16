const { Op } = require('sequelize');
const { User, BlogPost, Category } = require('../database/models');

const postService = {
  async creatService(title, content, categoryIds, tokenData) {
    const newResult = await BlogPost
    .create(
      {
      title,
      content,
      categoryIds,
      published: new Date(),
      updated: new Date(),
      userId: tokenData.id,
      },
    );

    return newResult;
  },

  async getService() {
    const result = await BlogPost.findAll({
      include: [{ 
        model: User, 
        as: 'user',
        attributes: 
        { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });

    return result;
  },

  async getByIdService(id) {
    const result = await BlogPost.findOne({ 
      where: { id },
      include: [{ 
        model: User, 
        as: 'user',
        attributes: { exclude: 'password' } },
        { model: 
            Category, 
            as: 'categories', 
            through: { attributes: [] }, 
        }], 
    });
    return result;
  },
async updatedService(id, title, content, categoryIds) {
    const result = await BlogPost.update({
      title,
      content,
      categoryIds,
      updated: new Date(),
    }, { where: { id } });
    return result;
  },

  async putService(id) {
    const result = await BlogPost.findOne({
      attributes: { exclude: ['published', 'updated'] },
      where: { id },
      include: [{ model: Category,
        as: 'categories',
        through: { attributes: [] },
      }],

    });
    return result;
  },

  async deleteService(id) {
    const result = await BlogPost.destroy({ where: { id } });
    return result;
  },

  async postSearch(q) {
    const result = await BlogPost.findAll({
      where: !q ? '' : { [Op.or]: [{ title: q }, { content: q }] },
      include: [{ 
        model: User, 
        as: 'user',
        attributes: { exclude: 'password' } },
        { model: 
            Category, 
            as: 'categories', 
            through: { attributes: [] }, 
        }],
    });
    return result;
  },
};

module.exports = postService;
