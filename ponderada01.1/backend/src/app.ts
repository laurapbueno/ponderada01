import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cardsRoutes from './routes/cardsRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/cards', cardsRoutes); // nova rota

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
