import express from 'express';
import cors from 'cors';
import { sequelize } from './src/database/index.mjs';
import router from './src/routes/index.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Usando o router principal
app.use('/', router);

app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
});
