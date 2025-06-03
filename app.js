import express from "express";
import { PORT } from "./config/env.js";
import cookieParser from "cookie-parser";
import connectToDatabase from "./database/mongodb.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/messages", messageRouter);

app.use(errorMiddleware);
app.use(arcjetMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is running on localhost: http://localhost:${PORT}`);
  await connectToDatabase();
});
