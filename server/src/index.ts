import express, { json, Request, Response } from "express";
import { getYoutubeVideoDownload } from "./services/downloadYoutubeVideo";
import cors from "cors";
import path from "path";
import { VideoDownloader } from "./services/getVideoInfo";
import fs from "fs";
const app = express();
const PORT = 8080;

const youtubeVideoDownloaer = new VideoDownloader();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get(
  "/api/video/convert",
  async (req: { query: { url: string } }, res: Response) => {
    const { url } = req.query;
    try {
      await youtubeVideoDownloaer.DownloadVideoFile(url);
      res.status(200).send();
    } catch (error) {
      throw new Error("Erro ao baixar o vídeo. " + error);
    }
  }
);

app.get("/api/video/info", async (req: Request, res: Response) => {
  try {
    const { url } = req.query;
    if (!url) throw Error("Erro ao encontrar o video");
    const urlParsed = url.toString();
    const info = await youtubeVideoDownloaer.GetVideoTitleAndThumb(urlParsed);
    res.status(200).json({ status: 200, data: info });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar info do vídeo." });
  }
});

app.get("/api/video/download", async (req: Request, res: Response) => {
  try {
    const filePath = path.resolve(__dirname, "..", "./outputFile.mp4");
    res.download(filePath, "video-convertido.mp4", (err) => {
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
