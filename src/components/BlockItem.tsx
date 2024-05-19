import Image from "next/image";
import React from "react";

interface BlockItemProps {
  title: string;
  imageUrl: string;
  description?: string;
}

const BlockItem: React.FC<BlockItemProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="block-item grid gap-4 p-3">
      {/* First Column: Icon Image (50px) */}
      <div className="p-2">
        <div className="w-[50px] h-[50px] relative">
          <img
            className="w-full h-full object-cover rounded"
            src={imageUrl}
            alt={title}
          />
        </div>
      </div>

      {/* Second Column: Primary Content (Full remaining width) */}
      <div className="p-2">
        <h6 className="mb-2 block   text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          {title}
        </h6>
        {description && (
          <div className="body text-sm line-clamp-3">
            {description}
          
          </div>
        )}
      </div>

      {/* Third Column: Stat Number (60px) */}
      <div className="stat p-2 text-center">
        <div className="label font-semibold">Active</div>
        <div className="number font-semibold text-lg">3.6K</div>
      </div>
    </div>
  );
};

export default BlockItem;
