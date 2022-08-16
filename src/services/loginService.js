const { User } = require('../database/models');

const loginService = {

  async postService(email, password) {
    const result = await User.findOne({ where: { email, password } });
    return result;
  },
  
};

module.exports = loginService;