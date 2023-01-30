import { Router } from 'express';
import {StatusCodes} from 'http-status-codes';

const router =  Router();

router.get('/', (req, res) => {
  return res.send('Olá, Dev!');
});

router.post('/teste', (req, res) => {
  console.log(req.body);

  return res.json(req.body);
});

export { router };
