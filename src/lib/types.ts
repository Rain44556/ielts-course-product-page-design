 type Medium = {
  name: string
  resource_type: 'video' | 'image'
  resource_value: string
  thumbnail_url: string 
}
 type ChecklistItem = {
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
}

export type Data ={
  slug: string;
  id: number;
  title: string;
  description: string;
  media: Medium[];
  checklist: ChecklistItem[];
  instructors: Instructor[];
}


export type DescriptionTitleProps = {
   title: string;
  description: string;
};
export type TrailerCTAChecklistProps = {
   media: Medium[];
    name: string;
    checklist: ChecklistItem[];
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