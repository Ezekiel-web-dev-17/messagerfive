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

// when deploying a backend on render, for each input what am i to fill in?

// ChatGPT said:
// When deploying a backend on Render, especially for a web service like an Express.js, Flask, Django, or other server-based backend, you’ll need to fill in a few key inputs. Here’s a breakdown of the typical fields and what you should put in each:

// 🛠️ Render Deployment Inputs (Web Service)
// 1. Name
// What to fill: A unique name for your service.

// Example: my-backend-api or flask-server.

// 2. Environment
// What to choose: Node / Python / Docker / etc. — depending on your backend.

// Example:

// For Express.js: Node

// For Django/Flask: Python

// If you have a Dockerfile: Docker

// 3. Build Command
// What to fill:

// Node: npm install

// Python: pip install -r requirements.txt

// Docker: (leave empty, Docker handles it)

// 4. Start Command
// What to fill:

// Node: node index.js or npm start

// Python: gunicorn app:app (for Flask) or python manage.py runserver 0.0.0.0:8000 (for Django)

// Docker: (leave empty)

// 5. Environment Variables
// What to fill: Key-value pairs needed for your backend to run (like DATABASE_URL, PORT, SECRET_KEY).

// Example:

// PORT=10000 (Render automatically sets a port, use process.env.PORT)

// DATABASE_URL=...

// 6. Branch
// What to choose: The Git branch that contains your backend code (main, master, or custom like backend).

// 7. Root Directory
// What to fill:

// If your backend is in the root: leave empty.

// If it’s in a subdirectory: enter the path, e.g. backend/

// 8. Region (if available)
// Choose the closest region to your users or database (e.g. Oregon or Frankfurt).

// 9. Plan
// Choose Free or Pro depending on your needs. Free has auto-sleep after 15 minutes of inactivity.
