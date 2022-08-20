import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/users.js";

const server = express();

server.use(bodyParser.json({ limit: "30mb", extended: true }));
server.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
server.use(cors());

server.use("/users", authRoutes);

const MONGO_URI = 'mongodb+srv://sibtain123:Sibtain123@cluster0.ias6b.mongodb.net/?retryWrites=true&w=majority';
const API_PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI)
  .then(() => server.listen(API_PORT, () => console.log(`server running on port: ${API_PORT}`)))
    .catch((error) => console.log(error.message));
