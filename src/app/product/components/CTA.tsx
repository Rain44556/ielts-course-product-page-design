import { TrailerCTAChecklistProps } from '@/lib/types';
import React from 'react';

const CTA = ({name}: TrailerCTAChecklistProps) => {
    return (
        <div className='w-full'>
            <h1 className='text-2xl mb-2 font-bold'>৳1000</h1>
            <div className='w-full shadow-4xl border-b-5 border-b-green-800 hover:bg-green-700 bg-green-600 text-center justify-center items-center'>
            <button className='p-3 cursor-pointer text-gray-100 text-sm'>{name}</button>
        </div>
        </div>
    );
};

export default CTA;