import { FormEvent, useEffect, useState } from "react";

export const UseFechVideo = () => {
  const [conversionStatus, setConversionStatus] = useState<
    "DONE" | "LOADING" | "ERROR"
  >();

  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (conversionStatus === "LOADING") {
      setDisableButton(true);
    }
  }, [conversionStatus]);

  useEffect(() => {
    if (disableButton) {
      setConversionStatus("DONE");
    }
  }, [disableButton]);

  const handleSearchVideo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConversionStatus("LOADING");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const url = formData.get("url");
    if (!url) return;

    const response = await fetch(
      "http://localhost:8080/api?url=" + url.toString()
    );
    if (response) setDisableButton(false);
  };

  return { disableButton, handleSearchVideo };
};
