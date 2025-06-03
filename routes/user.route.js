import { getUser, getUsers } from "../controllers/user.controller.js";
import { Router } from "express";
import authorize from "../middlewares/authorize.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
// userRouter.post("/create", createUser);

export default userRouter;
