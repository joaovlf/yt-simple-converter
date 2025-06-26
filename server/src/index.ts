import express, { json, Request, Response } from "express";
import { getYoutubeVideoDownload } from "./services/downloadYoutubeVideo";
import cors from "cors";
const app = express();
const PORT = 8080;

app.use(cors());

app.get("/api", async (req: { query: { url: string } }, res: Response) => {
  const { url } = req.query;
  try {
    const response = await getYoutubeVideoDownload(url);
    res.status(200).send(response);
  } catch (error) {
    throw new Error("Erro ao baixar o vídeo. " + error);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
