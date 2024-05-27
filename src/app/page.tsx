"use client";
import "./App.css";

import { gql, useQuery } from "@apollo/client";
import cn from "classnames";
import React, { useCallback, useState } from "react";
import { When } from "react-if";

import CardServer from "@/components/CardServer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Loader from "@/components/Loader";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import SearchBar from "@/components/SearchBar";
import TabCommunity from "@/components/TabCommunity";
import TabTopContributor from "@/components/TabTopContributor";
import useSearchFilters from "@/hooks/useSearchFilters";

const GET_PROJECTS = gql`
  query Projects {
    projects {
      id
      avatar {
        id
        url
      }
      name
      socialWeb
      socialDiscord
      socialTelegram
      socialX
      categories {
        name
        id
      }
      tags {
        id
        name
      }
      content {
        document
      }
    }
  }
`;

export default function Home() {
  const { loading, data } = useQuery(GET_PROJECTS);
  const [currentTab, setTab] = useState<string>("community");

  

  const serverProjects = data?.projects ?? [];
  const { searchTerm, setSearchTerm, resultSearch } =
    useSearchFilters(serverProjects);
  const [isProjectDetailModalOpen, setProjectDetailModal] = useState(false);
  const [currentProjectDetail, setProjectDetail] = useState(null);
  const projects = searchTerm ? resultSearch : serverProjects;

  const onViewProjectDetail = (project: any) => {
    setProjectDetailModal(true);
    setProjectDetail(project);
  };

  const onTabChange = useCallback(
    (tab: string) => {
      if (currentTab !== tab) {
        setTab(tab);
      }
    },
    [currentTab]
  );

  // const test = useCallback(async () => {
  //   const botToken = "7148133356:AAF6BZjbOoadcEKVoxL2Ia05D2znto6RyqY";
  //   const chatId = "-1001982900634";
  //   // Create a new URLSearchParams object
  //   const params = new URLSearchParams({
  //     offset: 0,
  //     limit: 10,
  //     chat_id: chatId
  //   } as any);
  //   const url = `https://api.telegram.org/bot${botToken}/getUpdates?${params}`;
  //   // const params = { offset: 0, limit: 10 }; // Adjust offset and limit as needed
  //   // if (groupId) {
  //   //   params.chat_id = groupId;
  //   // }
  //   try {
  //     const response = await fetch(url);
  //     console.log(`🚀 ~ test ~ response:`, response);
  //     return response.json();
  //   } catch (error) {
  //     console.error("Error fetching messages:", error);
  //     return [];
  //   }
  // }, []);

  // useEffect(() => {
  //   const result = test();
  //   result?.then((data) => {
  //     console.log(`🚀 ~ useEffect ~ data:`, data);
  //   });
  // }, []);

  return (
    <div className="root--skeleton">
      <Header />
      <HeroSection />
      <div className="section--project-list">
        <div className="px-2 lg:px-6 xl:container mx-auto text-left">
          <h2 className="mb-10 text-3xl sm:text-[40px] font-semibold color--primary">
            Into the Nads world
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <div className="hidden -md:hidden">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
              </div>
              {loading && <Loader />}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {!loading &&
                  projects?.map((item: any, index: number) => {
                    return (
                      <div
                        key={`card--${index}`}
                        className="rounded rounded-xl"
                      >
                        <CardServer
                          data={item}
                          onClick={(e: React.MouseEvent<HTMLElement>) => {
                            e.preventDefault();
                            onViewProjectDetail(item);
                          }}
                        />
                      </div>
                    );
                  })} 
              </div>
            </div>
            <div className="">
              <div className="hidden -md:block">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
              </div>
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
          </div>
        </div>
      </div>
      {isProjectDetailModalOpen && currentProjectDetail && (
        <ProjectDetailModal
          project={currentProjectDetail}
          isOpen={isProjectDetailModalOpen}
          onClose={() => {
            setProjectDetailModal(false);
            setProjectDetail(null);
          }}
        />
      )}
      <Footer />
    </div>
  );
}
