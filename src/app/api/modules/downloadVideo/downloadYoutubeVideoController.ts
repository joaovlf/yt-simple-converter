import { DownloadYoutubeVideoService } from "./downloadYoutubeVideoService";

export class downloadYoutubeVideoController {
  constructor() {}

  StreamVideoDownload(url?: string) {
    const downloader = new DownloadYoutubeVideoService();
    if (url) downloader.StreamVideoDownload(url);
  }
}
