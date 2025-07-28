import { DescriptionTitleProps } from "@/lib/types";
import React from "react";

const TitleDescription = ({ title, description }: DescriptionTitleProps) => {
  return (
    <div className="relative min-h-[400px] bg-gradient-to-b from-sky-950 to-sky-800 text-gray-50 lg:px-20 px-7 text-left shadow flex flex-col justify-center ">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div
        className="md:max-w-3xl text-md text-gray-300 text-justify"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default TitleDescription;
