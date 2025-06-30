import youtubeDl from "youtube-dl-exec";

export class GetVideoInfo {
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
}
