import express, { type Request, type Response } from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'API rodando com sucesso!' });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
