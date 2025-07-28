import { ExclusiveFeatureProps } from '@/lib/types';
import { Check } from 'lucide-react';
import Image from 'next/image';

const ExclusiveCourseFeature = ({title, features} : ExclusiveFeatureProps) => {
    return (
       <div className="my-10 px-5 lg:px-0">
        <h2 className="py-5 font-semibold text-gray-800 text-xl">{title}</h2>

        <div className="border border-gray-300 rounded-lg">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start justify-between gap-4 border-b border-gray-300 p-5">
              <div>
                <h3 className="text-md font-semibold pb-4 text-gray-600">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.checklist.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm md:text-base">
                      <Check className="text-blue-600 w-5 h-5 mt-1" />
                      <span className='text-sm text-gray-600'>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

             {feature.file_type === "image" && (
                <div className="w-full md:w-[230px]">
                  <Image
                    src={feature.file_url}
                    alt={feature.title}
                    width={160}
                    height={160}
                    className="md:w-full w-[250px]  h-auto rounded-md object-contain"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

export default ExclusiveCourseFeature;