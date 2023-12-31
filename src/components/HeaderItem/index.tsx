import React from "react";
import { twMerge } from "tailwind-merge";

type HeaderItemProps = {
  text?: string;
  divClass?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function HeaderItem({ text, divClass, ...props }: HeaderItemProps) {
  const defaultClasses =
    "active:border-b-2 h-[30px] pb-[0.68px] flex-col justify-center items-start gap-[10.32px] inline-flex cursor-pointer";

  return (
    <a {...props} className={twMerge(defaultClasses, props.className)}>
      <div
        className={twMerge(
          "active:font-bold text-white text-base font-normal font-['Aaux ProBlack SC'] uppercase tracking-wide",
          divClass
        )}
      >
        {text}
      </div>
    </a>
  );
}
