import Image from "next/image";
import numeral from "numeral";
import React from "react";

interface BlockTopContributorProps {
  data: any;
  rank: number;
}

const BlockTopContributor: React.FC<BlockTopContributorProps> = ({
  data,
  rank
}) => {
  const { username, avatarUrl, xp, message_count, level } = data;
  return (
    <div className="-block-item grid grid-cols-[36px_1fr_50px_50px_50px] gap-2 p-3">
      <div className="p-1 flex items-center">
        <div className="w-[36px]">
          <div className="flex items-center justify-center rounded-full w-[24px] h-[24px] bg-gray-700 text-sm">
            {rank}
          </div>
        </div>
      </div>

      <div className="p-1 flex items-center">
        <Image
          alt={username}
          src={avatarUrl}
          width="40"
          height="40"
          className="h-[40px] w-[40px] rounded-full min-w-[40px] border-2 border-solid  border-warning-default"
        />
        <span className="ml-2 text-sm">{username}</span>
      </div>

      {/* Third Column: Stat Number (60px) */}
      <div className="stat p-1 flex items-center">
        <div className="number font-semibold text-sm">
          {numeral(xp).format("0,0[.]0a")}
        </div>
      </div>
      <div className="stat p-1 flex items-center">
        <div className="number font-semibold text-sm">
          {numeral(message_count).format("0,0[.]0a")}
        </div>
      </div>
      <div className="stat p-1 flex items-center">
        <div className="number font-semibold text-sm">{level}</div>
      </div>
    </div>
  );
};

export default BlockTopContributor;
