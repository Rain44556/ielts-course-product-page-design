import { DescriptionTitleProps } from "@/lib/types";
import React from "react";

const TitleDescription = ({ title, description }: DescriptionTitleProps) => {
  return (
    <div className="relative min-h-[400px] bg-gradient-to-b from-sky-950 to-sky-800 text-gray-50 px-20 text-left rounded-xl shadow flex flex-col justify-center ">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div
        className="max-w-3xl text-md text-gray-300"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default TitleDescription;
