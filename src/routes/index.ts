import { Router } from "express";
import authRoutes from "./auth";
import userRoutes from "./users";

const rootRouter: Router = Router()

rootRouter.use('/auth', authRoutes);
rootRouter.use('/list', userRoutes);

export default rootRouter;