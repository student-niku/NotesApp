import React, { useState } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="herosection">
      <HeroLeft activeTab={activeTab} setActiveTab={setActiveTab} />
      <HeroRight activeTab={activeTab} />
    </div>
  );
};

export default HeroSection;