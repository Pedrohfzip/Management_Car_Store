
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import sequelize  from './config/index.mjs';
import router from './src/routes/index.mjs';


const app = express();
const PORT = 8080;

// Para __dirname funcionar em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());
// Servir arquivos estáticos da pasta uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', router);

app.listen(PORT, async () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
});
