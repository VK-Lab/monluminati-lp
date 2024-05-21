import React from "react";

import BlockTopContributor, {BlockTopContributorHeader} from "@/components/BlockTopContributor";
import useFetchTopNads from "@/hooks/useFetchTopNads";

const TabTopContributor = () => {
  const { data: dataTopNads, loading } = useFetchTopNads();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-0 max-h-[1024px] overflow-y-auto">
      <BlockTopContributorHeader />
      {dataTopNads.map((contributor: any, index: number) => {
        return (
          <div key={`block--${index}`} className="rounded rounded-xl">
            <BlockTopContributor rank={index + 1} data={contributor} />
          </div>
        );
      })}
    </div>
  );
};

export default TabTopContributor;
