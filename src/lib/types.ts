 type Medium = {
  name: string
  resource_type: 'video' | 'image'
  resource_value: string
  thumbnail_url: string 
}
 type Checklist = {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
};
 type Instructor =  {
  image: string
  name: string
  description: string
  short_description: string
  slug: string
  has_instructor_page: boolean
};
 type Feature = {
  id: string
  icon: string
  title: string
  subtitle: string
}
type Pointers ={
  id: string;
  color: string;
  icon: string;
  text: string;
};

type ExclusiveFeature = {
  title: string;
  checklist: string[];
  file_url: string;
  file_type: string;
};

type CourseDetails = {
  id: string 
  title: string
  description: string
}
   

export type Data ={
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: Checklist[];
  instructors: Instructor[];
}


export type LangProps = {
  searchParams?: {
    lang?: string;
  };
};

export type DescriptionTitleProps = {
   title: string;
  description: string;
};
export type TrailerCTAChecklistProps = {
   media: Medium[];
    name: string;
    checklist: Checklist[];
};
export type InstructorSectionProps = {
  title: string;
  instructors: Instructor[];
}
export type FeatureProps = {
  title: string;
  features: Feature[];
}
export type PointersProps ={
  title: string;
  pointers: Pointers[];
}
export type ExclusiveFeatureProps = {
  title: string;
  features: ExclusiveFeature[];
};
export type CourseDetailsProps = {
  title: string;
  details: CourseDetails[];
};