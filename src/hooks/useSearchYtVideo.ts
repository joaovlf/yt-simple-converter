// import { getYoutubeVideoDownload } from "@/functions/getYoutubeVideoData";
import { ChangeEvent, useState } from "react";

export const UseSerchYtVideo = () => {
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputText(value);
  };

  return { handleChange, inputText };
};
