import { FeatureProps } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

const CourseLayOut = ({title, features} : FeatureProps) => {
    return (
         <div className="my-10">
      <div className="container">
        <h2 className="py-5 font-semibold text-gray-800 text-xl">{title}</h2>

        <div className="grid grid-cols-2 gap-2 p-5 rounded-lg bg-gray-800 text-gray-100">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-4 p-4 hover:shadow-md transition duration-200"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10 object-contain mt-1"
                width={50}
                height={50}
              />
              <div>
                <h3 className="text-sm mb-2 font-semibold">{feature.title}</h3>
                <p className="text-xs  text-gray-300">{feature.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default CourseLayOut;