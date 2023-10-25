"use client";

import { Button } from "../Button";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

export function StartMainSection() {
  return (
    <motion.div
      initial={{ x: 1200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-[22rem] h-56 flex flex-col justify-start items-center absolute left-40 top-[21.5rem]"
    >
      <h1 className="uppercase text-5xl text-white mb-6">360º BUILDING</h1>
      <h2 className="text-[1.4rem] text-white mb-14">
        View the building and avaliability
      </h2>

      <Button
        text="let me in"
        icon={<BsArrowRight size={20} />}
        className="bg-white w-48"
      />
    </motion.div>
  );
}
