import { ReactNode } from "react";
import { BuildindSlider } from "../BuildindSlider";

interface BuildingsSectionProps {
  children?: ReactNode;
}

export function BuildingsSection({ children }: BuildingsSectionProps) {
  return (
    <section>
      <div className="container mx-auto w-[66rem] h-[33rem] absolute right-44 top-60">
        <BuildindSlider />
      </div>
    </section>
  );
}
