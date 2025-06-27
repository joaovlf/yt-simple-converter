import { FC, HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<HTMLInputElement> & { name: string };
export const InputText: FC<Props> = (props) => {
  return (
    <input
      {...props}
      name={props.name}
      placeholder="paste your url here to convert"
      className="border-1 bg-transparent border-amber-500 rounded-md w-full p-4 outline-0 text-amber-300 placeholder:text-amber-500 text-xs placeholder:font-light"
      type="text"
    />
  );
};
