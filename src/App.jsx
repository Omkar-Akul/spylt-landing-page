import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import gsap from 'gsap';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import MessageSection from './sections/MessageSection'
import FlavourSection from './sections/FlavourSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  return (
  <div>
   <Navbar />

   <HeroSection/>
   <MessageSection/>
   <FlavourSection />
   
   <div className=' border border-b-red-500 h-dvh'></div>
   </div>
  );
};

export default App