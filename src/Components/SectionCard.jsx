import { GiAfrica } from "react-icons/gi";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaGlobeEurope } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";

function SectionCard() {
  return (
    <>
      <div className="w-11/12 m-auto grid grid-cols-1 gap-3  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <div className="border border-sky-400 h-[250px] rounded-md pt-[170px] text-center">
          <GiAfrica className="text-3xl mx-auto" />
          <h1 className="font-bold text-xl">Afric continent</h1>
        </div>
        <div className="border border-sky-400 h-[250px] rounded-md pt-[170px] text-center">
          <FaEarthAmericas className="text-3xl mx-auto" />
          <h1 className="font-bold text-xl">Americ continent</h1>
        </div>
        <div className="border border-sky-400 h-[250px] rounded-md pt-[170px] text-center">
          <FaGlobeEurope className="text-3xl mx-auto" />
          <h1 className="font-bold text-xl">Europ continent</h1>
        </div>
        <div className="border border-sky-400 h-[250px] rounded-md pt-[170px] text-center">
          <FaGlobeAsia className="text-3xl mx-auto" />
          <h1 className="font-bold text-xl">Asia continent</h1>
        </div>
        <div className="border border-sky-400 h-[250px] rounded-md pt-[170px] text-center">
          <FaEarthOceania className="text-3xl mx-auto" />
          <h1 className="font-bold text-xl">Oceania continent</h1>
        </div>
      </div>
    </>
  );
}

export default SectionCard;
