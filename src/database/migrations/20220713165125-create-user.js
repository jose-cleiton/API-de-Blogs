'use strict';
const AttributesUser = require('../helpers/migrations/AttributesUser');
/** @param {import('sequelize').Sequelize} sequelize */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users',AttributesUser );
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};