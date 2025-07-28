'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="min-h-screen text-white py-20 px-4 md:px-10 flex items-center justify-center">
      <div className="border-2 border-yellow-500 max-w-4xl w-full bg-[#3b2f1c] rounded-3xl shadow-2xl p-8 md:p-16 text-center relative ">
        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-yellow-900 text-yellow-400 px-5 py-2 rounded-full text-xs font-medium border border-yellow-500">
          IELTS কোর্স
        </div>
        <p className="text-2xl md:text-3xl font-bold  mb-8 leading-snug tracking-tight">
          পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
        </p>

        <div className="flex justify-center">
          <Image
            src="/munzereenShahid.jpg"
            alt="Munzereen Shahid"
            width={350}
            height={350}
            className="rounded-xl shadow-lg w-full max-w-xs object-cover"
          />
        </div>

        <Link
          href="/product"
          className="inline-block mt-10 text-sm font-semibold text-green-400 hover:text-green-300 transition-all duration-300 hover:underline underline-offset-4">
          কোর্স বিস্তারিত দেখুন →
        </Link>
        
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-10 -right-10 w-36 h-36 bg-yellow-400/10 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default Banner;
