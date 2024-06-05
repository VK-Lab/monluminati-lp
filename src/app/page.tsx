import './App.css';

import React from 'react';

import HeroSection from '@/components/HeroSection';
import Homepage from '@/components/Homepage';

export default async function Index() {
  return (
    <React.Fragment>
      <HeroSection />
      <Homepage />
    </React.Fragment>
  );
}
