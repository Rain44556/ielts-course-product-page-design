"use client";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') || 'bn';

  const handleLangToggle = () => {
   const newLang = currentLang === 'en' ? 'bn' : 'en';
    router.push(`/product?lang=${newLang}`);
  };

  return (
    <div className="w-full sticky top-0 z-50 px-8 py-4 shadow-sm flex justify-between items-center bg-white">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="10 Minute School"
            className="h-6 sm:h-8"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleLangToggle}
          className="border border-gray-300 rounded-md px-2 cursor-pointer">
          {currentLang === "bn" ? "বাং" : "En"}
        </button>
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
