import Image from "next/image";
import React from "react";

import imgPlaceholder from "@/assets/image--hero.svg";

interface BlockItemProps {
  data: {
    title: string;
    description?: string;
    thumbnailUrl?: string;
  }
}

const BlockItem: React.FC<BlockItemProps> = ({ data }) => {
  const { thumbnailUrl, title, description } = data;
  return (
    <div className="block-item grid grid-cols-[50px_auto] gap-2 md:gap-4 py-3">
      {/* First Column: Icon Image (50px) */}
      <div className="p-2">
        <div className="w-[50px] h-[50px] relative">
          <Image
            className="w-full h-full object-cover rounded"
            src={thumbnailUrl ? thumbnailUrl : imgPlaceholder}
            alt={title}
            width={50}
            height={50}
          />
        </div>
      </div>

      {/* Second Column: Primary Content (Full remaining width) */}
      <div className="p-2">
        <h6 className="mb-2 block text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          {title}
        </h6>
        {description && (
          <div className="body text-sm line-clamp-3">
            {description}
          
          </div>
        )}
      </div>

      {/* Third Column: Stat Number (60px) */}
      {/* <div className="stat p-2 text-center">
        <div className="label font-semibold">Active</div>
        <div className="number font-semibold text-lg">3.6K</div>
      </div> */}
    </div>
  );
};

export default BlockItem;
