import { Router } from "express";
import {
  createMessages,
  deleteMessage,
  editMessage,
  getMessages,
} from "../controllers/message.controller.js";
import authorize from "../middlewares/authorize.middleware.js";

const messageRouter = Router();

messageRouter.get("/", getMessages);
// messageRouter.get("/:id", authorize, getUserMessages);
messageRouter.post("/create", authorize, createMessages);
messageRouter.post("/edit/:id", authorize, editMessage);
messageRouter.delete("/delete/:id", authorize, deleteMessage);

export default messageRouter;
