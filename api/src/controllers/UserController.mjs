
import { create } from 'domain';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const db = require('../../models/index.js');
import bcrypt from 'bcrypt';

const userController = {
  create: async (req, res) => {
      const { name ,email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.User.create({ name ,email, password: hashedPassword });
      console.log(newUser);
      res.status(201).json(newUser);
  },
  getUsers: async (req, res) => {
    try {
      const users = await db.User.findAll({
        attributes: { exclude: ['password'] } // Exclude password from the response
      });
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuários', error: error.message });
    }
  }
};

export { userController };