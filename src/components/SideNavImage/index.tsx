import Image from "next/image";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SideNavImageProps {
  imgName?: string;
  imgClass?: string;
}

export function SideNavImage({ imgName, imgClass }: SideNavImageProps) {
  return (
    <img
      src={`/assets/${imgName}.svg`}
      alt="icon"
      width={32}
      height={32}
      className={twMerge(
        "cursor-pointer hover:scale-110 transition-all duration-300",
        imgClass
      )}
    />
  );
}
