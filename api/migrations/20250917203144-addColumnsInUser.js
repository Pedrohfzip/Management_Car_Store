'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Adiciona a coluna 'role' para perfis de usuário
    await queryInterface.addColumn('users', 'role', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'cliente', // perfil padrão
      comment: 'Perfil do usuário: admin, estoquista, vendedor, mecanico, cliente'
    });
  },

  async down (queryInterface, Sequelize) {
    // Remove a coluna 'role' caso o migration seja revertido
    await queryInterface.removeColumn('users', 'role');
  }
}; 
