"use client";

import React, { ReactNode, useState } from "react";

type InputProps = {
  iconShow?: ReactNode;
  iconHide?: ReactNode;
} & React.HTMLAttributes<HTMLInputElement>;

export function InputPassord({ iconShow, iconHide, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPassowrd = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        {...props}
        type={!showPassword ? "password" : "text"}
        className="w-96 h-12 rounded-[500px] flex-col justify-start items-start gap-2 inline-flex p-4 bg-white bg-opacity-10 backdrop-blur-lg text-white text-sm font-normal placeholder:text-white shadow-white/60 shadow-sm"
      />
      <span onClick={handleShowPassowrd}>
        {showPassword ? iconShow : iconHide}
      </span>
    </div>
  );
}
