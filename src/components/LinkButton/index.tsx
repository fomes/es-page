import React from "react";

type LinkButtonProps = {
  text?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function LinkButton({ text, ...props }: LinkButtonProps) {
  return (
    <a
      href="#"
      {...props}
      className="w-[134px] h-[25px] text-neutral-100 text-sm font-normal uppercase hover:brightness-125 transition-all duration-300"
    >
      {text}
    </a>
  );
}
