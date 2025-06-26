"use client";
import { UseFechVideo } from "@/app/principal/hooks/useSearchVideo";
import { InputText } from "../InputText";

export function ConvertVideoForm() {
  const { handleSearchVideo, disableButton } = UseFechVideo();
  return (
    <form onSubmit={handleSearchVideo} className="w-full flex flex-col gap-1.5">
      {/* TODO MOUNT FILE ON FRONT END TO USER DOWNLOAD DIRECTLY WITH LINK COMPONENT */}
      <InputText name="url" />
      <div className="flex gap-1.5">
        <button className="justify-center shadow-2xl h-10 rounded-lg px-24  bg-amber-500 text-white font-bold hover:bg-amber-700 hover:text-gray-300 transition-all cursor-pointer">
          Download
        </button>

        <button
          disabled={disableButton}
          type="submit"
          className="disabled:opacity-65 disabled:cursor-not-allowed justify-center shadow-2xl h-10 rounded-lg px-24  bg-amber-500 text-white font-bold hover:bg-amber-700 hover:text-gray-300 transition-all cursor-pointer"
        >
          {disableButton ? "Converting..." : "Convert"}
        </button>
      </div>
    </form>
  );
}
