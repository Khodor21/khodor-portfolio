import Image from "next/image";
import SyriaFlag from "../images/Syria-Flag.svg";
import IslamicFlag from "../images/Islamic-Flag.svg";
const TopBar = () => {
  return (
    <div className="w-full bg-[#0A2A8A] text-white py-3 px-4 flex items-center justify-between gap-3 text-sm md:text-base relative z-20">
      <Image src={IslamicFlag} alt="Islamic Flag" width={24} height={18} />
      <p className="font-regular text-sm">
        {" "}
        توصيــل إلـــى جميـــع محافظـــات ســـوريا{" "}
      </p>
      <Image src={SyriaFlag} alt="Syria Flag" width={24} height={18} />
    </div>
  );
};

export default TopBar;
