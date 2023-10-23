import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  text?: string;
  icon?: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export function Button({ text, icon, className, ...props }: ButtonProps) {
  const btnStyle =
    "h-12 px-4 rounded-full shadow-inner backdrop-blur-lg justify-center items-center gap-2 inline-flex transition-all duration-300 hover:bg-amber-200 shadow-white/60 shadow-sm";

  return (
    <button className={twMerge(btnStyle, className)} {...props}>
      <div className="text-sm font-medium font-['Aaux ProBold'] uppercase tracking-wide flex items-center gap-4">
        <span>{text}</span>
        {icon}
      </div>
    </button>
  );
}
