"use client";
import cn from "classnames";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";

import Card from "@/components/Card";
import CardServer from "@/components/CardServer";
import BlockItem from "@/components/BlockItem";
import ProjectDetailModal from "@/components/ProjectDetailModal";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";
// import data from "@/components/mockData";
import useSearchFilters from "@/hooks/useSearchFilters";

import { When } from "react-if";
import TabTopContributor from "@/components/TabTopContributor";

import "./App.css";

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
  const { loading, error, data } = useQuery(GET_PROJECTS);
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

  const onTabChange = useCallback((tab: string) => {
    if (currentTab !== tab) {
      setTab(tab);
    }
  }, []);

  return (
    <div className="root--skeleton">
      <Header />
      <HeroSection />
      <div className="section--project-list">
        <div className="px-2 sm:px-0 container mx-auto text-left">
          <h2 className="mb-10 text-3xl sm:text-[40px] font-semibold color--primary">
            Into the Nads world
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <div className="md:hidden">
                <SearchBar value={searchTerm} onChange={setSearchTerm} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {loading && <div>Loading...</div>}
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
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((item, index) => {
                  return (
                    <div key={`card--${index}`} className="rounded rounded-xl">
                      <Card
                        data={item}
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          e.preventDefault();
                        }}
                      />
                    </div>
                  );
                })}
              </div> */}
            </div>
            <div className="">
              <div className="hidden md:block">
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
                  <div className="grid grid-cols-1 gap-0">
                    {[
                      {
                        title: "Monad Labs - $225M fundraise",
                        description:
                          "Unreal week with Monad announcing a $225m raise led by Paradigm. ",
                        imageUrl:
                          "https://pbs.twimg.com/profile_images/1744741990498279424/Mon40JUX_400x400.jpg"
                      }
                    ].map(({ title, imageUrl, description }, index) => {
                      return (
                        <div
                          key={`block--${index}`}
                          className="rounded rounded-xl"
                        >
                          <BlockItem
                            imageUrl={imageUrl}
                            description={description}
                            title={title}
                          />
                        </div>
                      );
                    })}
                  </div>
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
