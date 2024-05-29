import "./App.css";

import React from "react";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";

import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <div className="root--skeleton">
      <Header />
      <HeroSection />
      <Homepage />
      <Footer />
    </div>
  );
}
