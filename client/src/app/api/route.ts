import { NextResponse } from "next/server";
import { downloadYoutubeVideoController } from "@/app/api/modules/downloadVideo/downloadYoutubeVideoController";

export async function POST(req: Request) {
  // getYoutubeVideoDownload(url.toString());
  const url = (await req.formData()).get("url");
  try {
    const videoController = new downloadYoutubeVideoController();
    videoController.StreamVideoDownload(String(url));
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ url });
}
export async function GET() {
  return NextResponse.json({ message: "OI" });
}
