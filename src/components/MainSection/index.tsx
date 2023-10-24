import { ReactNode } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

interface MainSectionProps {
  children?: ReactNode;
}

export function MainSection({ children }: MainSectionProps) {
  return (
    <div className="w-[708px] h-[440px] top-[320px] absolute right-1/2 left-1/2 -ml-[354px]">
      <div className="flex-col justify-start items-center flex">
        <div className="flex-col justify-start items-center flex">
          <div className="text-center text-white text-4xl font-normal font-['Open Sans'] uppercase tracking-wider mb-8">
            Innovation in Your Hands
          </div>
        </div>
        <div className="w-[500px] opacity-70 text-center text-white text-xl font-semibold font-['Open Sans'] tracking-tight mb-48">
          Explore, Interact and Transform the Real Estate Market with Our Smart
          Interactive Table.
        </div>
      </div>
      <div className="flex-col justify-start items-center flex">
        <div className="text-center text-neutral-100 text-2xl font-normal font-['Open Sans'] uppercase mb-6">
          start experience
        </div>
        <div className="w-14 h-14 p-4 bg-white bg-opacity-10 rounded-full shadow-inner backdrop-blur-lg justify-center items-center inline-flex cursor-pointer hover:brightness-125 hover:scale-110 transition-all duration-300">
          <HiOutlineArrowRight className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
}