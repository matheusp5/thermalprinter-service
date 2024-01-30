import express from "express";
import { router as thermalRouter } from "./routes/thermal";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/thermal", thermalRouter);

export { app };
