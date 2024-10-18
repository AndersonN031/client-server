import { Router } from "express";
import { findAllUsers } from "../controllers/user-controller";

const userRoutes: Router = Router();

userRoutes.get('/user', findAllUsers);

export default userRoutes;