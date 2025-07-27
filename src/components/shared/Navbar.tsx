import { Menu, Search, Phone } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
    return (
          <div className="w-full px-8 py-4 shadow-sm flex justify-between items-center bg-white">
  
      <div className="flex items-center gap-2">
        <Menu className="w-6 h-6" />
        <Image
          src="/logo.png"
          alt="10 Minute School"
          className="h-6 sm:h-8"
          width={30}
          height={30}
        />
      </div>

  
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 text-black" />
          <div className="absolute -top-1 -right-1 text-orange-500 text-xs">*</div>
        </div>
        <Phone className="w-5 h-5 text-black" />
        <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium">
          লগ-ইন
        </button>
      </div>
    </div>
    );
};

export default Navbar;





