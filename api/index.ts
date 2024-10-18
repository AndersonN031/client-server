import express, { Express, Request, Response } from 'express';
import { PORT } from '../src/secrets';
import rootRouter from '../src/routes';
import { db } from '@vercel/postgres';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const database = db;

const app: Express = express();
app.use(cors());

app.use(express.json())

app.use('/api', rootRouter)


export const prismaClient = new PrismaClient({
    log: ['query']
})

app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:3000/api/user/user');
})

export { database };