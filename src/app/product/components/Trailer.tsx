'use client'
import { TrailerCTAChecklistProps } from '@/lib/types';
import { PhoneCall, Play } from 'lucide-react';
import { useState } from 'react';
import CTA from './CTA';
import CheckList from './CheckList';

const Trailer = ({media, name, checklist} : TrailerCTAChecklistProps) => {
    
  const trailer = media.filter((item) => item.resource_type === 'video')
  const [current, setCurrent] = useState(0);
    
    
    const nextTrailer = () => {
    setCurrent((prev) => (prev + 1) % trailer.length);
  };

  const prevTrailer = () => {
    setCurrent((prev) => (prev - 1 + trailer.length) % trailer.length);
  };

  const currentTrailer = trailer[current];
  const ytURL = `https://www.youtube.com/embed/${currentTrailer.resource_value}`;

    return (
      <div className="w-full md:w-[400px] absolute md:top-52 md:right-28">
      <div className=" relative p-5 bg-white border border-gray-300">
        <iframe
          width="100%"
          height="300"
          src={ytURL}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="  flex justify-between mt-4">
          <button
            onClick={prevTrailer}
            className="absolute top-40 p-1 text-gray-500 rounded-full bg-white rotate-180"
          >
            <Play size={20}></Play>
          </button>
          <button
            onClick={nextTrailer}
            className="absolute top-40 p-1 text-gray-500 rounded-full right-5 bg-white"
          >
            <Play size={20}></Play>
          </button>
           <CTA name={name} media={media} checklist={checklist}></CTA>
        </div>
         <CheckList name={name} checklist={checklist} media={media}></CheckList>
      </div>
      <div className='flex justify-between mt-3 p-1'>
        <p className='text-xs text-gray-400'>কোর্সটি সম্পর্কে বিস্তারিত জানতে</p>
<a className='text-green-600 text-xs underline flex gap-1'>
  <PhoneCall size={16}></PhoneCall>
  ফোন করুন (16910)</a>
      </div>
    </div>
    );
};

export default Trailer;