import Image from "next/image";
import React from "react";

import imgPlaceholder from "@/assets/image--hero.svg";

interface BlockItemProps {
  data: {
    title: string;
    description?: string;
    thumbnailUrl?: string;
    sourceUrl: string;
  };
}

const BlockItem: React.FC<BlockItemProps> = ({ data }) => {
  const { thumbnailUrl, title, description, sourceUrl } = data;
  return (
    <div className="transition block-item grid grid-cols-[50px_auto_50px] gap-2 md:gap-4 py-3  hover:bg-white/5">
      {/* First Column: Icon Image (50px) */}
      <div className="p-2">
        <div className="w-[50px] h-[50px] relative">
          <a
            href={sourceUrl}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="w-full h-full object-cover rounded"
              src={thumbnailUrl ? thumbnailUrl : imgPlaceholder}
              alt={title}
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>

      {/* Second Column: Primary Content (Full remaining width) */}
      <div className="p-2">
        <h6 className="mb-2 block text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          <a
            href={sourceUrl}
            title={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </h6>
        {description && (
          <div className="body text-sm line-clamp-3">{description}</div>
        )}
      </div>

      {/* Third Column: Stat Number (60px) */}
      <div className="stat p-2 text-center pt-[40px]">
        <a
          href={sourceUrl}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[34px] h-[34px] bg-gray-50/10 rounded-[50%]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            ></path>
          </svg>
        </a>
        {/* <div className="label font-semibold">Active</div>
        <div className="number font-semibold text-lg">3.6K</div> */}
      </div>
    </div>
  );
};

export default BlockItem;
