
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const db = require('../../models');

export const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll({
      attributes: ['id', 'name', 'email'] // Não retorna a senha
    });
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
};