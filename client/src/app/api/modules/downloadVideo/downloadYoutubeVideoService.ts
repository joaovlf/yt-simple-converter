import { getYoutubeVideoDownload } from "@/functions/getYoutubeVideoData";

export class DownloadYoutubeVideoService {
  constructor() {}

  StreamVideoDownload(url: string) {
    getYoutubeVideoDownload(url);
  }
}
