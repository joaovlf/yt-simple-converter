import youtubedl from "youtube-dl-exec";
import fs from "fs";

// const outputPath = "./outfile.mp4";

export const getYoutubeVideoDownload = (url: string) => {
  const streamVideoDownload = async () => {
    try {
      const outputPath = "./outputFile.mp4";
      const subprocess = youtubedl.exec(url, {
        format: "mp4",
        output: "-",
      });
      const writeStream = fs.createWriteStream(outputPath);
      subprocess.stdout?.pipe(writeStream);

      subprocess.stdout?.on("end", () => {
        console.log("✅ Download concluído!");
      });
      subprocess.stderr?.on("data", (data) => {
        console.error("❌ Erro do yt-dlp:", data.toString());
      });
    } catch (error) {
      console.error("Erro ao baixar vídeo:", error);
    }
  };

  streamVideoDownload();
};
