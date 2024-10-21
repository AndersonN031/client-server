import express, { Express, Request, Response } from 'express';
// import { PORT } from '../src/secrets';
import rootRouter from '../src/routes';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import pool from '../src/lib/database'; // A conexão com o banco de dados

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use('/api', rootRouter);

export const prismaClient = new PrismaClient({
    log: ['query']
});

export { pool }

export default (req: Request, res: Response) => {
    return app(req, res);
};

const PORT = 3000
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000/api/list/user')
})
