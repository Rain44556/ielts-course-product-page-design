import { InstructorSectionProps } from '@/lib/types';
import Image from 'next/image';
import React from 'react';

const Instructor = ({title,instructors} : InstructorSectionProps) => {
    
    return (
        <div className='lg:my-10 px-5 lg:px-0'>
           <h1 className='py-5 font-semibold text-gray-800 text-xl'>{title}</h1>
           <div className="border border-gray-300">
          {instructors.map((instructor) => (
            <div
              key={instructor.slug}
              className="bg-gray-50 shadow-md p-6 flex gap-10 items-center"
            >
              <Image
                src={instructor.image}
                alt={instructor.name}
                width={50}
                height={50}
                className="w-24 h-24 object-cover rounded-full border-4 border-primary mb-4"
              />
              <div className='text-gray-700'>
                <h3 className="text-xl font-medium text-gray-700 hover:text-green-600">{instructor.name}</h3>
              <p className="text-sm">{instructor.short_description}</p>
              <div
                className="text-sm mt-4"
                dangerouslySetInnerHTML={{ __html: instructor.description }}
              />
            </div>
              </div>
          ))}
        </div>
        </div>
    );
};

export default Instructor;