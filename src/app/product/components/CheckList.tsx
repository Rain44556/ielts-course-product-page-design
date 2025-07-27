import { TrailerCTAChecklistProps } from "@/lib/types";
import Image from "next/image";
import React from "react";

const CheckList = ({ checklist }: TrailerCTAChecklistProps) => {

  return (
    <div className="mt-4">
      <h1 className="font-bold text-lg text-gray-800">এই কোর্সে যা থাকছে</h1>
      <div className="grid gap-4 mt-4">
        {checklist.map((item) => (
          <div key={item.id} className="flex items-center gap-4 font-medium">
            <Image
              src={item.icon}
              alt="Checklist Icon"
              width={24}
              height={24}
              className="w-5 h-5 object-cover"
            ></Image>
            <span className="text-sm text-gray-900">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckList;
