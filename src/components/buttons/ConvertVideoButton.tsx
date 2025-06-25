// import Link from "next/link";
import { InputText } from "../InputText";

export async function ConvertVideoForm() {
  return (
    <form
      className="w-full flex flex-col gap-1.5"
      action="http://localhost:3000/api/"
      method="POST"
    >
      <InputText />
      <div className="flex gap-1.5">
        {/* <Link href="" download>
          <button className="justify-center shadow-2xl h-10 rounded-lg px-24  bg-amber-500 text-white font-bold hover:bg-amber-700 hover:text-gray-300 transition-all cursor-pointer">
            Download
          </button>
        </Link> */}
        <button
          type="submit"
          className="justify-center shadow-2xl h-10 rounded-lg px-24  bg-amber-500 text-white font-bold hover:bg-amber-700 hover:text-gray-300 transition-all cursor-pointer"
        >
          Convert
        </button>
      </div>
    </form>
  );
}
