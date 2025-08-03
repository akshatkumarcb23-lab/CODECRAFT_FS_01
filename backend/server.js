import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI).then(() => console.log("MongoDB connected"));

app.use("/api/auth", authRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
