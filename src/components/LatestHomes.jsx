import useAxiosSecure from "@/hooks/useAxiosInstance";
import React from "react";
import HomeCard from "./HomeCard";

const LatestHomes = async () => {
  const homeData = await (
    await fetch("http://localhost:5000/latest-homes")
  ).json();

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-xl font-semibold text-primary">Recent</h3>
        <h1 className="text-3xl font-bold">Newly Listed Homes</h1>
      </div>
      <div className="grid gap-5 px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {homeData.map((home) => (
          <HomeCard key={home.id} home={home} />
        ))}
      </div>
    </div>
  );
};

export default LatestHomes;
