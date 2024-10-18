import { createPool, VercelPostgresPoolConfig } from '@vercel/postgres';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })

export const PORT = process.env.PORT
export const JWT_SECRET = process.env.JWT_SECRET!

const dbConfig: VercelPostgresPoolConfig = {
    connectionString: process.env.POSTGRES_URL
}

export const database = createPool(dbConfig)