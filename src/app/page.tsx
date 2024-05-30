import "./App.css";

import React from "react";

import { auth } from "@/auth";
import HeroSection from "@/components/HeroSection";
import Homepage from "@/components/Homepage";

export default async function Index() {
  const session = await auth();
  // console.log(`🚀 ~ >> Index ~ session:`, session)
  
  return (
    <React.Fragment>
      <HeroSection />
      <Homepage />
    </React.Fragment>
  );
}
