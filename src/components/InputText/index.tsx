import { FC, HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLInputElement>;
export const InputText: FC<Props> = (props) => {
  return (
    <input
      {...props}
      name="url"
      placeholder="paste your url here to convert"
      className="border-1 bg-amber-50 border-amber-500 rounded-md w-full p-4 outline-0 text-gray-700 placeholder:text-gray-500 text-xs placeholder:font-light"
      type="text"
    />
  );
};
