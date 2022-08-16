const { User } = require('../database/models');

const userService = {

async postService(displayName, email, password, image) {
  const result = await User.findOrCreate({
    where: { email },
    defaults: { displayName, password, image },
  });
  return result;
},

async get() {
  const result = await User.findAll({ attributes: { exclude: ['password'] } });
  return result;
},

  async getById(id) {
    const result = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!result) return null;
    return result;
  },

  async exclude(id) {
   await User.destroy({ where: { id } });
    return true;
},

};

module.exports = userService;