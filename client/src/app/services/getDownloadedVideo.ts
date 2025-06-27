export class GetDownloadedVideo {
  constructor() {}

  async execute() {
    const videoFile = await fetch("http://localhost:8080/api/video");
    return videoFile;
  }
}
