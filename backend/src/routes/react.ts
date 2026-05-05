import path from "path";
import { fileURLToPath } from "url";
import express, { Router } from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientBuildPath = path.join(__dirname, "public");

const router = Router();

router.use(express.static(clientBuildPath));
router.get("/{*path}", (_, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

export const reactRouter = router;
