import { Router } from 'express';
import userRoutes from './userRoutes.mjs';
import postRoutes from './postRoutes.mjs';

const router = Router();

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export default router;
