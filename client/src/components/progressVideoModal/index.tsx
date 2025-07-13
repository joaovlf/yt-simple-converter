"use client";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";
import { CgClose } from "react-icons/cg";

interface Props {
  onClose: () => void;
  onClickDownload: () => void;
  onClickDownloadDone: () => void;
  imageUrl: string;
  title: string;
  format: string;
  isDone?: "DONE" | "LOADING";
}
export function ProgressVideoModal({
  onClose,
  imageUrl,
  title,
  format = "mp4",
  onClickDownloadDone,
  onClickDownload,
  isDone,
}: Props) {
  console.log(isDone);
  return (
    <div
      onClick={onClose}
      className="fixed bg-black/30 w-screen h-screen left-0 top-0 flex items-center justify-center"
    >
      <div className="h-fit transition-all translate-y-4 animate-fadeInUp gap-2.5 bg-neutral-600 w-2/4 text-white rounded-xl shadow-2xl relative p-3.5 flex flex-col">
        <CgClose
          onClick={onClose}
          className="absolute top-2 right-3"
          size={35}
        />
        <div className="w-full flex items-center justify-center text-3xl font-bold">
          Video Converter
        </div>
        <div className="flex flex-col size-full self-center border-t-2 items-center justify-center">
          <div className="flex flex-col max-w-1/2 items-center p-3.5 gap-3.5">
            <Image
              width={150}
              height={150}
              alt="video-thumbnail"
              src={imageUrl}
            />
            <p className="text-center text-sm">{title}</p>
          </div>
          {isDone === "DONE" && (
            <button
              onClick={onClickDownloadDone}
              className="disabled:opacity-65 disabled:cursor-none p-1.5 bg-emerald-400 rounded-lg flex items-center gap-3.5 font-bold"
            >
              Download
            </button>
          )}

          {isDone !== "DONE" && (
            <button
              disabled={isDone === "LOADING"}
              onClick={(e) => {
                e.stopPropagation();
                onClickDownload();
              }}
              className="disabled:opacity-65 cursor-pointer disabled:cursor-none p-1.5 bg-emerald-400 rounded-lg flex items-center gap-3.5 font-bold"
            >
              {isDone === "LOADING" ? (
                <AiOutlineLoading size={40} className="animate-spin" />
              ) : (
                `Click do download ${format}`
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
