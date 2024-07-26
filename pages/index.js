import React from "react";
//Internal Import

import { Footer, HeroSection, Header, Card} from "../components/index";

const Home = () => {
  return (
    <div className="bg-[#1A1A1A]">
        <Header/>
      <HeroSection/>
      <Card />
    <Footer /> 
    </div>
  )
}

export default Home