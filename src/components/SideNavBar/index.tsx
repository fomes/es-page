import Link from "next/link";
import { BorderDashed } from "../BorderDashed";
import { SideNavImage } from "../SideNavImage";

export function SideNavBar() {
  return (
    <div className="w-24 absolute left-0 top-0 border-r border-white border-opacity-30">
      <div className="h-screen flex items-center justify-center relative">
        <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full shadow-inner backdrop-blur-lg justify-center items-center inline-flex hover:scale-110 transition-all duration-300 cursor-pointer absolute -right-6">
          <SideNavImage imgName="plus" imgClass="hover:scale-100" />
        </div>

        <div className="flex flex-col justify-center items-center gap-1">
          <div className="flex flex-col gap-2 justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
            <SideNavImage imgName="360" imgClass="hover:scale-100" />
            <SideNavImage imgName="vector" imgClass="hover:scale-100" />
          </div>

          <BorderDashed />
          <SideNavImage imgName="group" imgClass="mt-4" />

          <BorderDashed />
          <SideNavImage imgName="group_four" imgClass="mt-4" />

          <BorderDashed />
          <SideNavImage imgName="location" imgClass="mt-4" />

          <BorderDashed />
          <SideNavImage imgName="gallery" imgClass="mt-4" />

          <BorderDashed />
          <SideNavImage imgName="movie" imgClass="mt-4" />
        </div>
      </div>
      <div className="absolute right-8 bottom-8 flex flex-col gap-8">
        <SideNavImage imgName="help" />

        <Link href={"/login"}>
          <SideNavImage imgName="quit" />
        </Link>
      </div>
    </div>
  );
}
