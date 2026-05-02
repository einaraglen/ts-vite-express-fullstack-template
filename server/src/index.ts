import "dotenv/config";
import cors from "cors";
import express from "express";
import { reactRouter } from "@routes/react";
import { HealthResponse } from "@models/health";

const app = express();

const ENV = process.env.NODE_ENV || "development";
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) =>
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  } as HealthResponse),
);

app.use(reactRouter);

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}, ENV=${ENV}`);
});
