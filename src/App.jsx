import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from './sections/MessageSection'
import FlavourSection from './sections/FlavourSection';
import { useGSAP } from "@gsap/react";
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });


  return (
  <main>
   <Navbar />
     <div id="smooth-wrapper">
        <div id="smooth-content">
   <HeroSection/>
   <MessageSection/>
   <FlavourSection />
   <NutritionSection />

   < BenefitSection /> 
   
   <div className=' border border-b-red-500 h-dvh'></div>
   </div>
   </div>
   </main>
  );
};

export default App