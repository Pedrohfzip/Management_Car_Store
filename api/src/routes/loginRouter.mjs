import { Router } from 'express';
import { loginController } from '../controllers/LoginController.mjs';

const router = Router();

router.post('/login', loginController.login);

export default router;