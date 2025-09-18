import jwt from 'jsonwebtoken';
const SECRET = process.env.JWT_SECRET || 'seuSegredoSuperSecreto';

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Espera: Bearer <token>
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' });
    req.user = user; // user.id, user.role, etc.
    next();
  });
}