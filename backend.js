import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "WebGIS Backend AWS üzerinde çalışıyor 🚀" });
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
