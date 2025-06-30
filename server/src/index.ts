import express, { json, Request, Response } from "express";
import { getYoutubeVideoDownload } from "./services/downloadYoutubeVideo";
import cors from "cors";
import path from "path";
import { GetVideoInfo } from "./services/getVideoInfo";
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/api", async (req: { query: { url: string } }, res: Response) => {
  const { url } = req.query;
  const youtubeVideoInfoGetter = new GetVideoInfo();
  try {
    const info = await youtubeVideoInfoGetter.GetVideoTitleAndThumb(url);
    // const response = await getYoutubeVideoDownload(url);

    res.status(200).send(info);
  } catch (error) {
    throw new Error("Erro ao baixar o vídeo. " + error);
  }
});

app.get("/api/getVideoInfo", async (req: Request, res: Response) => {
  const videoInfoGetter = new GetVideoInfo();
  try {
    const { url } = req.query;
    if (!url) throw Error("Erro ao encontrar o video");
    const urlParsed = url.toString();
    const info = await videoInfoGetter.GetVideoTitleAndThumb(urlParsed);
    console.log(info);
    res.status(200).json({ status: 200, data: info });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar info do vídeo." });
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
