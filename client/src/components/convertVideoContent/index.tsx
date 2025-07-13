"use client";
import { UseSearchVideoInfo } from "@/app/principal/hooks/useSearchVideo";
import { InputText } from "../InputText";
import { FiRefreshCcw } from "react-icons/fi";
import Image from "next/image";
import { Portal } from "../portal";
import { ProgressVideoModal } from "../progressVideoModal";
import { UseMountModal } from "@/hooks/useMountModal";
import { UseDownloadVideo } from "@/app/principal/hooks/useDownloadVideo";

export function ConvertVideoContent() {
  const { handleSearchVideo, disableButton, videoData, videoUrl } =
    UseSearchVideoInfo();

  const { handleModal, showModal } = UseMountModal();
  const { handleConvertVideo, isDone, handleDownloadVideo } =
    UseDownloadVideo();
  return (
    <div className="w-3/5 h-full flex flex-col gap-3.5 max-w-7xl">
      {videoData?.thumb && (
        <div className="w-full flex flex-col gap-3.5 items-center ">
          {showModal && (
            <Portal>
              <ProgressVideoModal
                isDone={isDone}
                onClickDownloadDone={handleDownloadVideo}
                onClickDownload={() => handleConvertVideo(videoUrl)}
                format="mp4"
                title={videoData.title}
                imageUrl={videoData.thumb}
                onClose={() => handleModal()}
              />
            </Portal>
          )}
          <div className="flex items-center justify-center w-full">
            {/* video data */}
            <div className="flex flex-col items-center justify-center w-fit gap-3.5 p-2.5">
              <Image
                width={450}
                height={350}
                className="w-full"
                src={videoData?.thumb}
                alt=""
              />
              <p className="font-bold ">{videoData?.title}</p>
            </div>
            {/* table */}
            <div className="flex flex-col items-center justify-start w-full h-full p-2.5">
              <div className=" flex w-full text-center">
                <div className="w-full p-2.5 border border-amber-400">
                  Video
                </div>
                <div className="w-full p-2.5 border border-amber-400">
                  Audio
                </div>
              </div>
              <div className=" flex w-full border border-amber-400">
                <div className="w-full p-2.5">Format</div>
                <div className="w-full p-2.5 text-end">Action</div>
              </div>
              <div className=" w-full text-center items-center border border-amber-400 p-2.5 flex justify-between">
                <p>1080p</p>
                <div className="flex items-center justify-center gap-1.5">
                  <button
                    onClick={() => handleModal()}
                    className="disabled:opacity-65 cursor-pointer disabled:cursor-none p-1.5 bg-emerald-400 rounded-lg flex items-center gap-3.5 font-bold"
                  >
                    Convert to MP4
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSearchVideo}
        className="w-full flex flex-col gap-1.5"
      >
        <InputText name="url" />
        <div className="flex gap-1.5">
          <button
            disabled={disableButton}
            type="submit"
            className="disabled:bg-red-500 disabled:cursor-not-allowed justify-center shadow-2xl h-10 rounded-lg px-24  bg-emerald-500 text-white font-bold hover:bg-emerald-600 hover:text-gray-300 transition-all cursor-pointer"
          >
            {disableButton ? (
              "Converting..."
            ) : (
              <div className="flex items-center gap-1.5">
                Convert
                <FiRefreshCcw size={16} />
              </div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
