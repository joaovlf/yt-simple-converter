import { useEffect, useState } from "react";

export const UseDownloadVideo = () => {
  const [isDone, setIsDone] = useState<"LOADING" | "DONE">();
  const [isVideoDoneToDownload, setIsVideoDoneToDownload] = useState(false);

  const handleDownloadVideo = async () => {
    window.location.href = "http://localhost:8080/api/video/download";
  };

  const handleConvertVideo = async (url: string) => {
    setIsDone("LOADING");
    const response = await fetch(
      "http://localhost:8080/api/video/convert?url=" + url
    );
    setIsVideoDoneToDownload(response.status === 200);
  };

  useEffect(() => {
    if (isVideoDoneToDownload) setIsDone("DONE");
  }, [isVideoDoneToDownload]);

  return {
    handleDownloadVideo,
    handleConvertVideo,
    isDone,
  };
};
