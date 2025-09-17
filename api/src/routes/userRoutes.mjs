import { Router } from 'express';
import { getAllUsers }  from '../controllers/UserController.mjs';

const router = Router();

router.get('/', getAllUsers);

export default router;