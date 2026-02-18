import Image from "next/image";
import SyriaFlag from "../images/Syria-Flag.svg"
import IslamicFlag from "../images/Islamic-Flag.svg"
const TopBar = () => {
  return (
    <div className="w-full bg-[#0A2A8A] text-white py-3 px-2 md:px-4 flex items-center justify-center gap-3 text-sm md:text-base relative z-20">

     
<Image
        src={IslamicFlag}
        alt="Islamic Flag"
        width={28}
        height={20}
      />
      <p className="font-medium text-sm">
        توصيل إلى جميع محافظات سوريا
      </p>
 <Image
        src={SyriaFlag}
        alt="Syria Flag"
        width={28}
        height={20}
      />
      
    </div>
  );
};

export default TopBar;
