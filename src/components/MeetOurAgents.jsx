import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const MeetOurAgents = () => {
  const agents = [
    {
      id: 1,
      name: "John David",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      verified: true,
    },
    {
      id: 2,
      name: "Alice Brian",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      verified: true,
    },
    {
      id: 3,
      name: "Melissa William",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      verified: true,
    },
    {
      id: 4,
      name: "Nathan James",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-purple-600 text-lg font-medium mb-2">Agents</p>
          <h1 className="text-5xl font-bold text-gray-900">Meet Our Agents</h1>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <div key={agent.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4] shadow-lg">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Name and Badge */}
              <div className="text-center border-t-2 border-gray-200 pt-6">
                <div className="flex items-center justify-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {agent.name}
                  </h3>
                  {agent.verified && (
                    <FaCheckCircle className="text-blue-500 text-lg" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurAgents;
