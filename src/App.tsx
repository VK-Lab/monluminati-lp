import { useCallback, useState } from "react";
import Card from "./components/Card";
import BlockItem from "./components/BlockItem";
import ProjectDetailModal from "./components/ProjectDetailModal";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isProjectDetailModalOpen, setProjectDetailModal] = useState(false);
  const onViewProjectDetail = (id: string) => {
    console.log(">> Id: ", id);
    setProjectDetailModal(true);
  }

  return (
    <div className="root--skeleton">
      <Header />
      <HeroSection />
      <div className="section--project-list">
        <div className="container mx-auto text-left">
          <h2 className="mb-10 text-3xl sm:text-[40px] font-semibold color--primary">Into the Nads world</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {new Array(12).fill(1).map((item, index) => {
                  return (
                    <div key={`card--${index}`} className="rounded rounded-xl">
                      <Card onClick={onViewProjectDetail} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <SearchBar />
              <div className="tabs-wrapper mb-4">
                <div className="flex items-center">
                  <div className="font-semibold p-2 px-6 border-b border-indigo-500 border-b-4 text-lg">
                    Communities
                  </div>
                  <div className="font-semibold p-2 px-6 text-lg">Top Nads</div>
                </div>
              </div>
              <div className="tab-content">
                <div className="grid grid-cols-1 gap-0">
                  {new Array(10).fill(1).map((item, index) => {
                    return (
                      <div
                        key={`block--${index}`}
                        className="rounded rounded-xl"
                      >
                        <BlockItem title={`Title ${index}`} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectDetailModal
        isOpen={isProjectDetailModalOpen}
        onClose={() => setProjectDetailModal(false)}
      />
      <Footer />
    </div>
  );
}

export default App;
