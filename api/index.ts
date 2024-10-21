import express, { Express, Request, Response } from 'express';
import rootRouter from '../src/routes'; // Supondo que suas rotas estão configuradas aqui
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import pool from '../src/lib/database'; // A conexão com o banco de dados
import path from 'path'; // Para manipulação de caminhos de arquivos

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use('/api', rootRouter); // Usando o router para rotas da API

// Inicializa o cliente Prisma
export const prismaClient = new PrismaClient({
    log: ['query']
});

export { pool };


app.use(express.static(path.join(__dirname, '../client/build')));


app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

export default (req: Request, res: Response) => {
    return app(req, res);
};

// Configuração do servidor
const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}/api/list/user`);
    });
}
