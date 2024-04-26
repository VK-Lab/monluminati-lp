import cn from "classnames";

const CardCompact = ({ title, description, tag }: any) => {
  return (
    <div className="transition card-common relative flex w-full flex-row bg-clip-border shadow-xl border border-white/25 rounded rounded-lg">
      <div className="relative m-0 w-[104px] shrink-0 overflow-hidden rounded-r-none bg-clip-border">
        <div className="rounded">
          <img
            src="https://pbs.twimg.com/profile_images/1535292066397409280/r-5azuJ__400x400.jpg"
            alt="image"
            className="w-[104px] h-[104px] rounded object-cover"
            style={{
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px"
            }}
          />
        </div>
      </div>
      <div className="px-3 text-left">
        <h6 className="mt-2 mb-1 block   text-base font-semibold uppercase leading-relaxed tracking-normal antialiased">
          WORMHOLE
        </h6>
        <p className="body   text-sm font-normal leading-relaxed antialiased line-clamp-2">
        Hundreds of companies and applications use Wormhole’s blockchain connectivity platform to securely and scalably grow their user base, increase market share, and drive more on-chain activity.
        </p>
      </div>
    </div>
  );
};

export default CardCompact;
