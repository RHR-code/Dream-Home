import React from "react";
import { FaCheckCircle, FaSmile } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";

export default function BannerCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  md:-ml-10 py-5 ">
      <div className="flex  flex-col items-center justify-center ">
        <div className="relative mb-4">
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full opacity-70"></div>

          <div className="relative w-16 h-16 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-4xl text-gray-800" />
          </div>

          <div className="absolute -top-1 right-2 w-2 h-2 bg-primary/50 rounded-full"></div>
          <div className="absolute top-2 -right-2 w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-1">40,000+</h2>
          <p className="text-gray-600 font-medium">Premium Properties</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8">
        <div className="relative mb-4">
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full opacity-70"></div>

          <div className="relative w-16 h-16 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center">
            <FaSmile className="text-4xl text-gray-800" />
          </div>

          <div className="absolute -top-1 right-2 w-2 h-2 bg-primary/50 rounded-full"></div>
          <div className="absolute top-2 -right-2 w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-1">35,000+</h2>
          <p className="text-gray-600 font-medium">Happy Customers</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-8 col-span-2 md:col-span-1">
        <div className="relative mb-4">
          <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full opacity-70"></div>

          <div className="relative w-16 h-16 bg-white border-4 border-gray-800 rounded-full flex items-center justify-center">
            <BsBagCheckFill className="text-4xl text-gray-800" />
          </div>

          <div className="absolute -top-1 right-2 w-2 h-2 bg-primary/50 rounded-full"></div>
          <div className="absolute top-2 -right-2 w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-1">13,000+</h2>
          <p className="text-gray-600 font-medium">In Business</p>
        </div>
      </div>
    </div>
  );
}
