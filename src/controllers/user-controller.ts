import { Request, Response } from "express";
import pool from "../lib/database";
// Ajuste o caminho conforme necessário


export const findAllUsers = async (req: Request, res: Response) => {
    const { email } = req.query;
    try {
        let result;
        if (email) {
            result = await pool.query(`
                SELECT name, email 
                FROM users 
                WHERE email = $1
            `, [email]);
        } else {
            result = await pool.query(`
                SELECT name, email 
                FROM users
            `);
        }
        res.json(result.rows);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
