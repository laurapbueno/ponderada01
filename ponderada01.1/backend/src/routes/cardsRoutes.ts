import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const response = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=5');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cartas da API externa.' });
  }
});

export default router;
