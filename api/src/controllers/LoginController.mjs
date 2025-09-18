
import { create } from 'domain';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const db = require('../../models/index.js');
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const SECRET = process.env.JWT_SECRET || 'seuSegredoSuperSecreto';
const loginController = {
 login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await db.User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }
        const token = jwt.sign(
            { id: user.id, role: user.role, name: user.name },
            SECRET,
            { expiresIn: '1d' }
        );
      res.status(200).json({ message: 'Login bem-sucedido', user, token });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao processar login', error: error.message });
    }
  }
};

export { loginController };