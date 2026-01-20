import React from "react";
import {
  FaHome,
  FaUsers,
  FaAward,
  FaHandshake,
  FaCity,
  FaKey,
} from "react-icons/fa";

const Statistics = () => {
  const statistics = [
    {
      id: 1,
      icon: <FaHome className="text-5xl" />,
      number: "5,000+",
      label: "Properties Listed",
      color: "from-purple-600 to-purple-700",
    },
    {
      id: 2,
      icon: <FaUsers className="text-5xl" />,
      number: "12,000+",
      label: "Happy Clients",
      color: "from-pink-600 to-pink-700",
    },
    {
      id: 3,
      icon: <FaAward className="text-5xl" />,
      number: "25+",
      label: "Awards Won",
      color: "from-purple-600 to-purple-700",
    },
    {
      id: 4,
      icon: <FaHandshake className="text-5xl" />,
      number: "8,500+",
      label: "Successful Deals",
      color: "from-pink-600 to-pink-700",
    },
    {
      id: 5,
      icon: <FaCity className="text-5xl" />,
      number: "50+",
      label: "Cities Covered",
      color: "from-purple-600 to-purple-700",
    },
    {
      id: 6,
      icon: <FaKey className="text-5xl" />,
      number: "3,200+",
      label: "Properties Sold",
      color: "from-pink-600 to-pink-700",
    },
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-600 font-semibold text-lg mb-3">
            Our Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            By The Numbers
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by thousands of clients worldwide, we're committed to
            delivering exceptional real estate services
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -mr-16 -mt-16"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {stat.icon}
                </div>

                {/* Number */}
                <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-gray-700 text-lg font-medium">
                  {stat.label}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-300 rounded-2xl transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Find Your Dream Home?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Join thousands of satisfied clients and let us help you find the
              perfect property
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
