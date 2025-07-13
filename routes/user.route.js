import {
  getMultipleUsers,
  getUser,
  getUsers,
} from "../controllers/user.controller.js";
import { Router } from "express";
import authorize from "../middlewares/authorize.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/multi", getMultipleUsers);

export default userRouter;
