import mongoose from "mongoose";

import { NODE_ENV, DB_URI } from "../config/env.js";

if (!DB_URI) {
  const error = new Error(
    ` "Please define the DB_URI environment variable inside .env.<development>.local"`
  );
  throw error;
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to mongoDB!`);
  } catch (error) {
    console.log(`Error connecting to ${NODE_ENV} DataBase`);
    process.exit(1);
  }
};

export default connectToDatabase;
