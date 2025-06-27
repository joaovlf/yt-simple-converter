import express, { json, Request, Response } from "express";
import { getYoutubeVideoDownload } from "./services/downloadYoutubeVideo";
import cors from "cors";
import path from "path";
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

app.get("/api/video", async (_: Request, res: Response) => {
  try {
    const filePath = path.resolve(__dirname, "..", "./outputFile.mp4");
    res.status(200).download(filePath, "video-convertido.mp4", (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(500).send("Error sending file");
      }
    });
  } catch (error) {
    throw new Error("Erro ao baixar o vídeo. " + error);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
