import { Router } from 'express';
import { userController }  from '../controllers/UserController.mjs';
import { authenticateToken } from '../middlewares/authMiddleware.mjs';

const router = Router();

router.post('/register', userController.create);
router.get('/', authenticateToken, userController.getUsers);

export default router;