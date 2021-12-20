'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     queryInterface.createTable('Users', { 
       id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull: false, 
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
