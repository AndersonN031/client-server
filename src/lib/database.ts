// lib/database.ts
import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

pool.connect((err) => {
    if (err) throw err;
    console.log('Connected to the PostgreSQL database');
});

export default pool;
