import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import appleLogo from '@/assets/apple.png'
import googlePlayLogo from '@/assets/googlePlay.png'

const Footer = () => {
    return (
           <div className="bg-white border-t text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
      
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-2xl font-bold">
            <span className="text-red-600">10</span> MINUTE SCHOOL
          </h1>
          <p className="text-lg font-semibold text-center">
            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="bg-black rounded-md overflow-hidden flex items-center px-4 py-2 text-white"
            >
                <Image className=" mr-5" src={googlePlayLogo} alt="googlePlayLogo" width={50} height={50}></Image>
              <span>Get it on<br />Google Play</span>
            </a>
            <a
              href="#"
              className="bg-black rounded-md overflow-hidden flex items-center px-4 py-2 text-white"
            >
               <Image className="bg-white mr-5" src={appleLogo} alt="appleLogo" width={50} height={50}></Image>
              <span>Download on<br />App Store</span>
            </a>
          </div>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10 text-center sm:text-left">
          <div>
            <h3 className="font-bold mb-4">কোম্পানি</h3>
            <ul className="space-y-2 text-sm">
              <li>ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</li>
              <li>শিক্ষক হিসেবে যোগ দিন</li>
              <li>অ্যাফিলিয়েট হিসেবে যোগ দিন</li>
              <li>প্রাইভেসি পলিসি</li>
              <li>রিফান্ড পলিসি</li>
              <li>ব্যবহারকারীর শর্তাবলী</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">অন্যান্য</h3>
            <ul className="space-y-2 text-sm">
              <li>ব্লগ</li>
              <li>বুক স্টোর</li>
              <li>ফ্রি নোটস ও গাইড</li>
              <li>চাকরি প্রস্তুতি কোর্সসমূহ</li>
              <li>সার্টিফিকেট ভেরিফাই করুন</li>
              <li>ফ্রি ডাউনলোড</li>
            </ul>
          </div>
        </div>

  
        <div className="mt-10 border-t pt-6 flex flex-col items-center space-y-4">
          <div className="flex gap-4 text-xl text-gray-600">
            <Facebook />
            <Linkedin />
            <Youtube />
            <Instagram />
          </div>
          <p className="text-xs text-center">
            স্বত্ব &copy; ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>
    </div>
    );
};

export default Footer;
