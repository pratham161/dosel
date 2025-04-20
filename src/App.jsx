import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeServe from './components/WhoWeServe';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';
import VisionSection from './components/VisionSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
     <div className="h-screen w-full flex flex-col bg-slate-900">
         <Navbar/>
         <Hero/>
         <Services/>
         <WhoWeServe/>
         <WhyChooseUs/>
         <VisionSection/>
         <ContactSection/>
         <Footer/>
     </div>
  );
};

export default App