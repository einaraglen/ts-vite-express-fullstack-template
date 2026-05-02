import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) =>
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
  }),
);

app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}, ENV=${process.env.NODE_ENV}`);
});
