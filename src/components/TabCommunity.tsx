import React from "react";
import Scrollbars from "react-custom-scrollbars";

import useFetchCommunitiesNews from "@/hooks/useFetchCommunitiesNews";

import BlockItem from "./BlockItem";

const TabCommunity = () => {
  const { data: latestNews, loading } = useFetchCommunitiesNews();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Scrollbars style={{ height: 1024 }}>
      <div className="grid grid-cols-1 gap-0">
        {latestNews.map((news: any, index: number) => {
          return (
            <div key={`block--${index}`} className="rounded rounded-xl">
              <BlockItem data={news} />
            </div>
          );
        })}
      </div>
    </Scrollbars>
  );
};

export default TabCommunity;
