import { ConvertVideoContent } from "@/components/convertVideoContent";
import { BiLeaf } from "react-icons/bi";
// import { UseSerchYtVideo } from "@/hooks/useSearchYtVideo";

export default function Page() {
  return (
    <div className="h-full w-full border-blue-700 flex flex-col justify-center items-center p-10 bg-background ">
      <h3 className="text-gray-500 font-bold text-xl">
        Simple Youtube Converter
      </h3>
      <div className="d-block justify-center items-start gap-1.5 flex flex-col w-full">
        <div className="flex flex-col w-full gap-2.5 items-center">
          <p className="text-md text-gray-500 font-light flex gap-1.5">
            Convert video for{" "}
            <span className="text-emerald-500 font-bold flex items-center">
              free <BiLeaf />
            </span>
          </p>
          <ConvertVideoContent />
        </div>
        {/* TODO MONTAR O ARQUIVO COM METODO DE STREAM 
        QUE JA ESTÁ PRONTO ANTES DE DISPONIVILIZAR O DOWNLOAD */}
      </div>
    </div>
  );
}
