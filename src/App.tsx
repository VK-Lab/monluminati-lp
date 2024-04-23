import { useCallback, useState } from "react";
import logo from "./assets/logo--monad.svg";
import SocialLinks from "./components/SocialLinks";
import Card from "./components/Card";
import BlockItem from "./components/BlockItem";
import ProjectDetailModal from "./components/ProjectDetailModal";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  const [isProjectDetailModalOpen, setProjectDetailModal] = useState(false);

  return (
    <div className="root--skeleton">
      {/* <div className="relative z-[10] flex items-center absolute z-[1] left-4 top-4 w-full">
        <a className="" href="#">
          <img src={logo} alt="CrossX" className="p-0 logo h-[32px]" />
        </a>
        <div className="ml-auto flex items-center">
          <div className="menu-wrapper mr-4">
            <ul className="menu flex items-center text-white">
              <li>
                <a
                  className="transition p-4 text-white font-semibold"
                  href="#about"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="transition p-4 text-white font-semibold"
                  href="#features"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  className="transition p-4 text-white font-semibold"
                  href="#features"
                >
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
          <SocialLinks />
        </div>
      </div>
      <div className="relative section--hero text-center z-[10]">
        <div className="heading mb-4">
          Decentralized Governance <br /> of AI through DAOs
        </div>
        <div className="subheading text-center mx-auto">
          Ensure democratic governance, privacy, security, and fair compensation
          for data contributors
        </div>
        <div className="btns--wrapper">
          <button className="btn--primary">Early-bird Registration</button>
          <button className="btn--primary">Join Community</button>
        </div>
      </div> */}
      <Header />
      <HeroSection />
      <div className="section--project-list">
        <div className="container mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {new Array(12).fill(1).map((item, index) => {
                  return (
                    <div key={`card--${index}`} className="rounded rounded-xl">
                      <Card />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="">
              <div className="tabs-wrapper mb-4">
                <div className="flex items-center">
                  <div className="font-semibold p-2 px-6 border-b border-indigo-500 border-b-4">
                    Popular
                  </div>
                  <div className="font-semibold p-2 px-6">Newest</div>
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
      {/* <div className="section--technical" style={{ height: 3500 }}></div> */}
      <ProjectDetailModal
        isOpen={isProjectDetailModalOpen}
        onClose={() => setProjectDetailModal(false)}
      />
    </div>
  );
}

export default App;
