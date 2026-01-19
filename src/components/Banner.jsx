import React from "react";
import BannerCard from "./BannerCard";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row p-5 my-10">
      <div className="lg:w-1/2">
        <h2 className="text-3xl md:text-5xl pt-5 lg:pt-0">Exploring Unique</h2>
        <h2 className="text-4xl md:text-7xl font-semibold text-primary py-5">
          Homes In Market
        </h2>
        <p className="max-w-lg">
          Find your perfect home with ease. Explore verified listings in prime
          locations. Trusted solutions for modern living.
        </p>
        <div>
          <BannerCard />
        </div>
      </div>
      <div className="lg:w-1/2">
        <Image
          width={800}
          height={800}
          src="/home-banner.jpg"
          className="w-full rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
