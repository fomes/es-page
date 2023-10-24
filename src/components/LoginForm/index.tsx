import Image from "next/image";
import { Button } from "../Button";
import { HiOutlineArrowRight } from "react-icons/hi";
import { LinkButton } from "../LinkButton";
import { Input } from "../Input";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { InputPassord } from "../InputPassword";

export function LoginForm() {
  return (
    <div className="w-[1033.61px] h-[748px] p-12 bg-black bg-opacity-60 rounded-2xl shadow-inner backdrop-blur-lg justify-start items-center gap-12 inline-flex m-xl:h-[680px]">
      <div className="rounded-lg justify-start items-start gap-2.5 flex">
        <div className="relative w-[505.61px] h-[652px] rounded-lg shadow">
          <Image
            src={"/assets/building.jpeg"}
            alt="building"
            width={505}
            height={652}
            className="rounded-lg"
          />

          <Image
            src={"/assets/logo.png"}
            alt="logo"
            width={219}
            height={129}
            className="absolute left-[8.36rem] bottom-[3.49rem]"
          />
        </div>
      </div>
      <div className="flex-col justify-start items-center gap-12 inline-flex">
        <div className="h-[104px] flex-col justify-center items-start gap-4 flex -ml-4">
          <div className="text-white text-[32px] font-normal font-['Open Sans'] uppercase tracking-wide">
            access the platform
          </div>
          <div className="w-[370px] opacity-70 text-white text-base font-normal font-['Open Sans']">
            Access as a spectator by clicking let me in or log in as a broker.
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="h-[105px] flex-col justify-center items-start gap-8 flex">
            <div className="h-[25px] border-b border-white border-opacity-30 justify-end items-center inline-flex">
              <LinkButton text="join as guest" />
            </div>
            <Button
              text="let me in"
              className="bg-white text-neutral-100 bg-opacity-10 hover:text-black"
            />
          </div>
          <div className="w-[381px] h-[0px] border-[1px] border-white border-opacity-30"></div>
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-12 flex">
              <div className="flex-col justify-start items-start gap-8 flex">
                <div className="h-[25px] border-b border-white border-opacity-30 justify-end items-center inline-flex">
                  <LinkButton text="I’M a broker" />
                </div>
                <div className="flex-col justify-start items-start gap-4 flex">
                  <Input type="email" placeholder="Type your email" />
                  <InputPassord
                    placeholder="Type your passoword"
                    iconShow={
                      <LuEyeOff className="text-white absolute right-3 bottom-4 cursor-pointer hover:text-black transition-all duration-300" />
                    }
                    iconHide={
                      <LuEye className="text-white absolute right-3 bottom-4 cursor-pointer hover:text-black transition-all duration-300" />
                    }
                  />
                </div>
              </div>
              <a href="/">
                <Button
                  text="login"
                  className="w-96 bg-white"
                  icon={<HiOutlineArrowRight className="text-2x" />}
                />
              </a>
            </div>
            <div className="w-[370px] text-center">
              <span className="text-white text-sm font-normal font-['Open Sans']">
                {"Don’t have an account?"}
              </span>
              <span className="text-neutral-900 text-sm font-normal font-['Open Sans']">
                {" "}
              </span>
              <a href="#">
                <span className="text-amber-200 text-sm font-normal font-['Open Sans'] underline hover:brightness-125 transition-all duration-300">
                  Create new account
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
