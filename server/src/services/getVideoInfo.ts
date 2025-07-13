import path from "path";
import fs from "fs";
import youtubeDl from "youtube-dl-exec";

export class VideoDownloader {
  constructor() {}

  async GetVideoTitleAndThumb(url: string) {
    const videoInfo = (await youtubeDl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      preferFreeFormats: true,
    })) as { fulltitle: string; thumbnail: string };

    return { title: videoInfo.fulltitle, thumb: videoInfo.thumbnail };
  }

  async DownloadVideoFile(url: string) {
    const streamVideoDownload = async () => {
      if (!url) return new Response("Missing video URL", { status: 400 });
      try {
        const outputPath = path.resolve("./outputFile.mp4");

        if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);

        const subprocess = youtubeDl.exec(url, {
          output: outputPath,
          format: "best[ext=mp4]",
        });

        return new Promise<void>((resolve, reject) => {
          subprocess.stderr?.on("data", (data: Buffer) => {
            const msg = data.toString();
            process.stdout.write("📥 " + msg); // exibe em tempo real
          });

          subprocess.on("exit", (code) => {
            if (code === 0) {
              console.log("✅ Download concluído!");
              resolve();
            } else {
              console.error("❌ yt-dlp saiu com código:", code);
              reject(new Error("yt-dlp exited with code " + code));
              return { message: "yt-dlp exited with code " + code };
            }
          });

          subprocess.on("error", (err) => {
            console.error("❌ Erro ao iniciar yt-dlp:", err);
            reject(err);
          });
        });
      } catch (error) {
        console.error("Erro ao baixar vídeo:", error);
      }
    };

    return streamVideoDownload();
  }
}
