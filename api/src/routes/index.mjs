import { Router } from 'express';
import userRoutes from './userRoutes.mjs';
import loginRoutes from './loginRouter.mjs';
import carRoutes from './carRoutes.mjs';

const router = Router();

router.use('/users', userRoutes);
router.use('/login', loginRoutes);
router.use('/cars', carRoutes);


export default router;
