import cn from "classnames";
import React, { useCallback, useState } from "react";
import { When } from "react-if";

import TabCommunity from "@/components/TabCommunity";
import TabTopContributor from "@/components/TabTopContributor";

const Sidebar = () => {
  const [currentTab, setTab] = useState<string>("community");
  const onTabChange = useCallback(
    (tab: string) => {
      if (currentTab !== tab) {
        setTab(tab);
      }
    },
    [currentTab]
  );
  return (
    <div>
      <div className="tabs-wrapper mb-4">
        <div className="flex items-center">
          {[
            {
              label: "Communities",
              value: "community"
            },
            {
              label: "Top Nads",
              value: "topContributor"
            }
          ].map(({ label, value }) => {
            return (
              <div
                key={`tab--${value}`}
                className={cn(
                  "cursor-pointer tab-item font-semibold p-2 px-6 text-lg",
                  {
                    "tab-item--active border-b border-indigo-500 border-b-4":
                      currentTab === value
                  }
                )}
                onClick={() => onTabChange(value)}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
      <When condition={currentTab === "community"}>
        <div className="tab-content">
          <TabCommunity />
        </div>
      </When>
      <When condition={currentTab === "topContributor"}>
        <div className="tab-content">
          <TabTopContributor />
        </div>
      </When>
    </div>
  );
};

export default Sidebar;