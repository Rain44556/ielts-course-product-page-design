"use client";
import { CourseDetailsProps } from "@/lib/types";
import { ChevronUp, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const CourseDetails = ({ title, details }: CourseDetailsProps) => {
const [open, setOpen] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };


  return (
    <div className="my-10 px-5 lg:px-0">
      <h2 className="py-5 font-semibold text-gray-800 text-xl">{title}</h2>
      <div className="border border-gray-300 rounded-lg p-4">
        {details.map((detail, id) => (
          <div
            key={detail.id}
            className="mb-2 border-b border-dashed border-gray-300">
            <button
              onClick={() => toggleAccordion(id)}
              className="flex justify-between w-full text-sm text-left px-4 py-3 cursor-pointer font-semibold text-gray-800 transition-all duration-200">
              <span dangerouslySetInnerHTML={{ __html: detail.title }} />
              {open === id ? (
                <ChevronUp
                  className={`transform text-gray-500 hover:text-gray-700 transition-transform duration-200 cursor-pointer 
                  }`}
                />
              ) : (
                <ChevronDown className="text-gray-400 hover:text-gray-700 transition-transform duration-200 cursor-pointer" />
              )}
            </button>
            {open === id && (
              <div
                dangerouslySetInnerHTML={{ __html: detail.description }}
                className="px-4 text-sm font-medium text-gray-600"
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
