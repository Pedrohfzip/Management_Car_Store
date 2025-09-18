'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Car', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      transmission_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fuel_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      license_plate: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      doors: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mileage: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Car');
  }
};
