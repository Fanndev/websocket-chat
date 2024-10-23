import { Router } from "express";
import authRouter from "./api/auth.routes.js";

const apiRouter = Router();

apiRouter.use("/api", authRouter);

export default apiRouter;
