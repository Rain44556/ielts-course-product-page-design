import { Search, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
          <div className="w-full px-8 py-4 shadow-sm flex justify-between items-center bg-white">
          <div className="flex items-center gap-2">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="10 Minute School"
          className="h-6 sm:h-8"
          width={100}
          height={100}
        /></Link>
      </div>

  
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 text-black" />
        </div>
        <div className="flex items-center text-green-700 gap-1">
          <Phone className="w-5 h-5 "></Phone>
        <p>16910</p>
        </div>
        <button className="bg-green-700 text-white px-3 py-1 rounded-md text-sm font-medium">
          লগ-ইন
        </button>
      </div>
    </div>
    );
};

export default Navbar;





