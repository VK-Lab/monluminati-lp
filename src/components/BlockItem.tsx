import React from "react";

const BlockItem: React.FC = ({ title }) => {
  return (
    <div className="block-item grid gap-4 p-3">
      {/* First Column: Icon Image (50px) */}
      <div className="p-2">
        <div className="w-[50px] h-[50px]">
          <img
            className="w-full h-full object-cover rounded"
            src="https://pbs.twimg.com/profile_images/1744741990498279424/Mon40JUX_400x400.jpg"
            alt="Icon"
          />
        </div>
      </div>

      {/* Second Column: Primary Content (Full remaining width) */}
      <div className="p-2">
        <h6 className="mb-2 block   text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          {title}
        </h6>
        <div className="body text-sm line-clamp-3">
        Unreal week with Monad announcing a $225m raise led by Paradigm. 
        </div>
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
