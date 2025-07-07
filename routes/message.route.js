import { Router } from "express";
import {
  createMessages,
  deleteMessage,
  editMessage,
  getMessages,
} from "../controllers/message.controller.js";
import authorize from "../middlewares/authorize.middleware.js";

const messageRouter = Router();

messageRouter.get("/", authorize, getMessages);
messageRouter.post("/create", authorize, createMessages);
messageRouter.post("/edit/:id", authorize, editMessage);
messageRouter.delete("/delete/:id", authorize, deleteMessage);

export default messageRouter;
