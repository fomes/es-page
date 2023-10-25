import { HeaderItem } from "../HeaderItem";
import Image from "next/image";

export function Header() {
  return (
    <div className="min-w-[1216px] w-full h-12 justify-between items-center inline-flex">
      <div className="min-w-[867px] w-5/6 h-[30px] border-b-2 border-white border-opacity-30 justify-start items-start gap-[23px] flex">
        <div className="h-[30px] pb-[0.68px] flex-row justify-center items-start gap-3 inline-flex">
          <HeaderItem text="Home" className="border-b-2" />
          <HeaderItem text="Project" />
          <HeaderItem text="Sales" />
        </div>
      </div>
      <div className="justify-start items-center gap-6 flex">
        <div className="w-12 h-12 relative flex justify-center items-center rounded-full border-white border-2">
          {" "}
          <Image
            src={"/assets/home_level_icon.png"}
            alt="logo"
            width={50}
            height={50}
            className="absolute"
          />
        </div>
        <Image
          src={"/assets/header_logo.svg"}
          alt="logo"
          width={228}
          height={32}
          className="h-8"
          sizes="100%"
        />
      </div>
    </div>
  );
}
