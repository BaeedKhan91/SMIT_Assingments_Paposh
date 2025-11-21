import React from "react";

function Hero() {

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
     
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-10">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
          </div>
        </div>
      </div>
     
      <img
        className="w-full sm:w-1/2"
        src="./images/Logo/hero_img.png"
        alt=""
      />
    </div>
  );
}

export default Hero;
