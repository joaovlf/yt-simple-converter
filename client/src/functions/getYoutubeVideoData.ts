import youtubedl from "youtube-dl-exec";
import fs from "fs";
import path from "path";

export const getYoutubeVideoDownload = (url?: string) => {
  const streamVideoDownload = async () => {
    if (!url) return new Response("Missing video URL", { status: 400 });
    try {
      const outputPath = path.resolve("./outputFile.mp4");

      if (fs.existsSync(outputPath)) fs.unlinkSync(outputPath);

      const ytDlpPath = path.resolve(
        "./node_modules/youtube-dl-exec/src/bin/yt-dlp.exe"
      );
      const subprocess = youtubedl.exec(url, {
        format: ".mp4",
        output: outputPath,
        exec: ytDlpPath,
      });

      const writeStream = fs.createWriteStream(outputPath);
      subprocess.stdout?.pipe(writeStream);

      return new Promise<void>((resolve, reject) => {
        subprocess.stdout?.on("end", () => {
          console.log("✅ Download concluído!");
          resolve();
        });

        subprocess.stderr?.on("data", (data) => {
          console.error("❌ Erro do yt-dlp:", data.toString());
        });

        subprocess.on("error", (err) => {
          console.error("❌ Falha ao executar o processo:", err);
          reject(err);
        });
      });
    } catch (error) {
      console.error("Erro ao baixar vídeo:", error);
    }
  };

  streamVideoDownload();
};
