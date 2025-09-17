import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Rota de posts funcionando!' });
});

export default router;
