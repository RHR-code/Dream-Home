import React from "react";
import {
  FaHome,
  FaBuilding,
  FaCity,
  FaWarehouse,
  FaLandmark,
} from "react-icons/fa";

const PartnersSection = () => {
  const partners = [
    {
      id: 1,
      name: "Rosewood Homes",
      icon: <FaHome className="text-6xl text-gray-400" />,
    },
    {
      id: 2,
      name: "The Capital",
      icon: <FaBuilding className="text-6xl text-gray-400" />,
    },
    {
      id: 3,
      name: "Ironwood Apartments",
      icon: <FaCity className="text-6xl text-gray-400" />,
    },
    {
      id: 4,
      name: "Adobe Homes",
      icon: <FaWarehouse className="text-6xl text-gray-400" />,
    },
    {
      id: 5,
      name: "JA Builders",
      icon: <FaLandmark className="text-6xl text-gray-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold text-lg mb-3">
            Our Partners
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Trusted By RealHomes
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* First Row - 3 items */}
          {partners.slice(0, 3).map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl shadow-lg p-12 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>
                <p className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {partners.slice(3, 5).map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl shadow-lg p-12 flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.icon}
                </div>
                <p className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add partnership CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg mb-6">
            Interested in becoming a partner?
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
