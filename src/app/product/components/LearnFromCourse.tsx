import { PointersProps } from '@/lib/types';
import { Check } from 'lucide-react';
import React from 'react';

const LearnFromCourse = ({title, pointers} :PointersProps) => {
    return (
        <div className="my-10 px-5 lg:px-0">
      <div className="max-w-5xl mx-auto">
        <h2 className="py-5 font-semibold text-gray-800 text-xl">{title}</h2>
        <div className="grid lg:grid-cols-2 gap-6 border border-gray-300 p-6 rounded-md">
          {pointers.map((item) => (
            <p key={item.id} className="flex items-start gap-5">
              <Check className="text-blue-600" />
              <span className="text-gray-700 text-sm leading-relaxed">{item.text}</span>
            </p>
          ))}
        </div>
      </div>
      </div>
    );
};

export default LearnFromCourse;