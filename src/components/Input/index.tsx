import { ComponentProps, ReactNode } from "react";

export type InputProps = ComponentProps<"input"> & {
  icon?: ReactNode;
};

export function Input({ icon, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        className="w-96 h-12 rounded-[500px] flex-col justify-start items-start gap-2 inline-flex p-4 bg-white bg-opacity-10 backdrop-blur-lg text-white text-sm font-normal placeholder:text-white shadow-white/60 shadow-sm"
      />
      {icon}
    </div>
  );
}
