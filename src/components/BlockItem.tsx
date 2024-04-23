import React from "react";

const BlockItem: React.FC = ({ title }) => {
  return (
    <div className="block-item grid gap-4 p-3">
      {/* First Column: Icon Image (50px) */}
      <div className="p-2">
        <div className="w-[50px] h-[50px]">
          <img
            className="w-full h-full object-cover rounded"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="Icon"
          />
        </div>
      </div>

      {/* Second Column: Primary Content (Full remaining width) */}
      <div className="p-2">
        <h6 className="mb-2 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          {title}
        </h6>
        <div className="body text-sm line-clamp-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, nostrum.
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
