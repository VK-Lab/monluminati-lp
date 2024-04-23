import cn from "classnames";

const CardCompact = ({ title, description, tag }: any) => {
  return (
    <div className="transition card-common relative flex w-full flex-row bg-clip-border shadow-xl border border-white/25 rounded rounded-lg">
      <div className="relative m-0 w-[104px] shrink-0 overflow-hidden rounded-r-none bg-clip-border">
        <div className="rounded">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
            alt="image"
            className="w-[104px] h-[104px] rounded object-cover"
          />
        </div>
      </div>
      <div className="px-3 text-left">
        <h6 className="mt-2 mb-1 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          startups
        </h6>
        <p className="body font-sans text-sm font-normal leading-relaxed antialiased line-clamp-2">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses.
        </p>
      </div>
    </div>
  );
};

export default CardCompact;
