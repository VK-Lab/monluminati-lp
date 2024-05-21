import React from "react";
import Scrollbars from "react-custom-scrollbars";

import BlockTopContributor, {BlockTopContributorHeader} from "@/components/BlockTopContributor";
import useFetchTopNads from "@/hooks/useFetchTopNads";

const TabTopContributor = () => {
  const { data: dataTopNads, loading } = useFetchTopNads();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Scrollbars style={{ height: 1024 }}>
      <div className="grid grid-cols-1 gap-0">
        <BlockTopContributorHeader />
        {dataTopNads.map((contributor: any, index: number) => {
          return (
            <div key={`block--${index}`} className="rounded rounded-xl">
              <BlockTopContributor rank={index + 1} data={contributor} />
            </div>
          );
        })}
      </div>
    </Scrollbars>
  );
};

export default TabTopContributor;
