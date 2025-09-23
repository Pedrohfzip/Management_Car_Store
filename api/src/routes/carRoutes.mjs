import { Router } from 'express';
import { carController }  from '../controllers/carController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = Router();


// Buscar todos os carros
router.get('/', carController.getAll);

// Criar carro
router.post('/', authenticateToken, carController.create);

export default router;