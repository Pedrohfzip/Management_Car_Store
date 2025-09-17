import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('esobase', 'postgres', '2442', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Mostra logs SQL no console, pode remover se quiser
});

export default sequelize;
