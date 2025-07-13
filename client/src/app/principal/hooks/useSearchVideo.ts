import { FormEvent, useEffect, useState } from "react";

export const UseSearchVideoInfo = () => {
  const [conversionStatus, setConversionStatus] = useState<
    "DONE" | "LOADING" | "ERROR"
  >();

  const [isVideoDone, setIsVideoDone] = useState<
    "DONE" | "PENDING" | "NO-CONVERTED"
  >();
  const [videoConversionDone, setVideoConversionDone] = useState(false);

  const [disableButton, setDisableButton] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const [videoData, setVideoData] = useState<{
    thumb: string;
    title: string;
  }>();

  useEffect(() => {
    if (conversionStatus === "LOADING") {
      setDisableButton(true);
    }
  }, [conversionStatus]);

  useEffect(() => {
    if (disableButton) setConversionStatus("DONE");
  }, [disableButton]);

  useEffect(() => {
    if (videoConversionDone) setIsVideoDone("DONE");
  }, [videoConversionDone]);

  const handleSearchVideo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConversionStatus("LOADING");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const url = formData.get("url");
    if (!url) return;
    setVideoUrl(url.toString());
    setIsVideoDone("NO-CONVERTED");
    setVideoConversionDone(false);
    const response = await fetch(
      "http://localhost:8080/api/video/info?url=" + url.toString()
    ).then(async (res) => {
      return await res.json();
    });
    if (response) {
      setDisableButton(false);
      console.log(response);
      setVideoData(response.data);
    }
  };

  const handleDownloadVideo = async () => {
    window.location.href = "http://localhost:8080/api/video/download";
    // await fetch("http://localhost:8080/api/video?url=" + videoUrl);
  };
  const handleConvertVideo = async () => {
    const response = await fetch(
      "http://localhost:8080/api/video/convert?url=" +
        encodeURIComponent(videoUrl)
    );
    setVideoConversionDone(response.status === 200);
    setIsVideoDone("PENDING");
  };
  const handleClearVideoData = () => {
    setVideoData(undefined);
  };

  return {
    disableButton,
    handleSearchVideo,
    handleDownloadVideo,
    handleClearVideoData,
    handleConvertVideo,
    videoData,
    isVideoDone,
    videoUrl,
  };
};
