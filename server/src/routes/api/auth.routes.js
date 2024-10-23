import { Router } from "express";
import { register, login } from "../../controller/auth.controller.js";

// require("dotenv").config();
// const authController = require("../../controller/auth.controller");

// module.exports = (express, app, default_router) => {
//   const router = express.Router();

//   router.post("/auth/register", register); // user register
//   router.post("/auth/login", login); // user login

//   app.use(default_router, router);
// };

const authRouter = Router();

authRouter.post("/auth/register", register); // user register
authRouter.post("/auth/login", login); // user login

export default authRouter;
