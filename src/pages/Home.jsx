import React from "react";
import Hero from "../components/Hero.jsx";
import VisionMission from "../components/VisionMission.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";
import WhyUs from "../components/WhyUs.jsx";
import OurServices from "../components/OurServices.jsx";
import WhoItsFor from "../components/WhoItsFor.jsx";

export default function Home() {
  return (
    <main>
      <Hero />
      <VisionMission />
      <OurServices/>
      <Services />
      <WhoItsFor/>
      <WhyUs/>
      <Contact />
    </main>
  );
}