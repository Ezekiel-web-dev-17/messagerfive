import { Router } from "express";
import {
  createMessages,
  deleteMesage,
  editMessage,
  getMessages,
  getUserMessages,
} from "../controllers/message.controller.js";
import authorize from "../middlewares/authorize.middleware.js";

const messageRouter = Router();

messageRouter.get("/", getMessages);
messageRouter.get("/:id", authorize, getUserMessages);
messageRouter.post("/create", authorize, createMessages);
messageRouter.post("/:id", authorize, editMessage);
messageRouter.delete("/:id", authorize, deleteMesage);

export default messageRouter;
