'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Car', 'image_url', {
      type: Sequelize.STRING,
      allowNull: true,
      comment: 'URL da imagem do carro'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Car', 'image_url');
  }
};
