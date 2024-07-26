import React from "react";

//Internal Import
import { SwapComponent, swapComponent} from "./index";
const HeroSection = () => {
  return(
    <section className="bg-[#1A1A1A] text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="container flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Token
            {""} <span className="text-[#7765F3]">Marketplace</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Swap, earn, and build on the leading decentralized crypto trading protocal.
            <br className="hidden md:inline lg:hidden"/>
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex fles-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#7765F3] text-gray-900">
                Get Start
              </a>
              <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">
                Swap ERC20
              </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 ms:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <SwapComponent/> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
