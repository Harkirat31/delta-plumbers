import { Feature } from "@/types/feature";
import Image from "next/image";
import { MdOutlinePlumbing } from "react-icons/md";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <div className="w-40 h-40 relative">
      <Image fill={true} alt="emergency" src={"/features/emergencyservice.svg"} ></Image>
    </div>,
    title: "EMERGENCY SERVICES",
    paragraph:
      "Round-the-clock support and service for any kinds of sudden plumbing tasks. We have no holidays or weekends.",
  },
  {
    id: 1,
    icon: <div className="w-40 h-40 relative">
    <Image fill={true} alt="emergency" src={"/features/plumbingdrain.svg"} ></Image>
  </div>,
    title: "CLOGGED DRAINS​",
    paragraph:
      "Up-to-date technological solutions for drain cleaning and clogs removal. From under-sink to underground.",
  },
  {
    id: 1,
    icon: <div className="w-40 h-40 relative">
    <Image fill={true} alt="emergency" objectFit="contain" src={"/features/waterdamage.svg"} ></Image>
  </div>,
    title: "SEWER LINE REPAIR​",
    paragraph:
      "Repair service for any kinds of sewers – copper and PVC. Modern camera inspections and trenchless repairs without digging",
  },
  {
    id: 1,
    icon: <MdOutlinePlumbing className="w-40 h-40"></MdOutlinePlumbing>,
    title: "PLUMBING SERVICES & REPAIR",
    paragraph:
      "From regular pipes and fixtures repair to massive appliances replacement.",
  },
];
export default featuresData;
