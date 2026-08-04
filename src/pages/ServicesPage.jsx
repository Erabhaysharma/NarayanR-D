import React from "react";
import OurServices from "../components/OurServices.jsx";
import Confidentiality from "../components/Confidentiality.jsx";
import EngagementSection from "../components/EngagementSection.jsx";
import WhoItsFor from "../components/WhoItsFor.jsx";

export default function ServicesPage() {
  return (
    <main>
        
      <OurServices />
      <WhoItsFor/>
      <EngagementSection/>

      <Confidentiality/>
    </main>
  );
}