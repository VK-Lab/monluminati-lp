import "./App.css";

import { gql, useQuery } from "@apollo/client";
import React, { useState } from "react";

import CardServer from "@/app/components/CardServer";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import Loader from "@/app/components/Loader";
import ProjectDetailModal from "@/app/components/ProjectDetailModal";
import SearchBar from "@/app/components/SearchBar";
import Sidebar from "@/app/components/Sidebar";
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
              <Sidebar />
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
