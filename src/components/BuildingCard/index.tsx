import Image from "next/image";

interface BuildingCardProps {
  building: IBuilding;
}

interface IBuilding {
  id: number;
  img: string;
  name: string;
}

export function BuildingCard({ building }: BuildingCardProps) {
  return (
    <div  >
      <Image
        src={building.img}
        width={528}
        height={352}
        priority
        alt="cover"
        className="rounded-2xl max-h-[580px]"
      />
    </div>
  );
}
