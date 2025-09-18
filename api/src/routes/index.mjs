import { Router } from 'express';
import userRoutes from './userRoutes.mjs';
import loginRoutes from './loginRouter.mjs';

const router = Router();

router.use('/users', userRoutes);
router.use('/login', loginRoutes);


export default router;
