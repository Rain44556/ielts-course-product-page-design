import React from 'react';
import TitleDescription from './components/TitleDescription';
import { getProductData } from '@/lib/api';
import Trailer from './components/Trailer';
import Instructor from './components/Instructor';
import CourseLayOut from './components/CourseLayOut';
import LearnFromCourse from './components/LearnFromCourse';

const ProductPage = async () => {
    const product = await getProductData();
    const instructorSec = product.data.sections.find((ins: { type: string; }) => ins.type === 'instructors')
    const featuresSec = product.data.sections.find((feat: { type: string; }) => feat.type === 'features')
    const pointersSec = product.data.sections.find((feat: { type: string; }) => feat.type === 'pointers')

   
    return (
        <div>
              <TitleDescription 
            title={product.data.title}
            description={product.data.description}>
            </TitleDescription>
            <Trailer 
            media={product.data.media} 
            name={product.data.cta_text.name}
            checklist={product.data.checklist}></Trailer>
           <div className='md:mx-32 max-w-2xl'>
             <Instructor
            title = {instructorSec.name} 
            instructors={instructorSec.values}></Instructor>
            <CourseLayOut
            title={featuresSec.name}
            features={featuresSec.values}
            ></CourseLayOut>
            <LearnFromCourse
            title={pointersSec.name}
            pointers={pointersSec.values}
            ></LearnFromCourse>
           </div>
        </div>
    );
};

export default ProductPage;