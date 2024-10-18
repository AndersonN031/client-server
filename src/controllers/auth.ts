import { Request, Response } from "express"
import { compareSync, hashSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../secrets";
import { prismaClient } from "../../api";


export const signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    let user = await prismaClient.user.findFirst({ where: { email } })
    if (user) {
        throw Error('Usuário já existe!')
    }

    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    })

    res.json(user)
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    let user = await prismaClient.user.findFirst({ where: { email } })
    if (!user) {
        throw Error('Esse usuário não existe!')
    }

    if (!compareSync(password, user.password)) {
        throw Error('Senha incorreta.')
    }

    const token = jwt.sign({
        userId: user.id,
    }, JWT_SECRET)

    res.json({ user, token });
}