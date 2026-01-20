import Image from "next/image";
import React from "react";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaRegHeart,
  FaCalendarAlt,
  FaHome,
  FaTag,
  FaDollarSign,
  FaShare,
  FaPrint,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { MdPlace } from "react-icons/md";

const HomeDetailsPage = async ({ params }) => {
  const { id } = await params;
  const homeData = await (
    await fetch(`https://dream-home-server-omega.vercel.app/homes/${id}`)
  ).json();

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-purple-900">
              Property Details
            </h1>
            {/* <div className="flex gap-3">
              <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition">
                <FaShare className="text-xl" />
              </button>
              <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition">
                <FaPrint className="text-xl" />
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg transition"
              >
                {isFavorite ? (
                  <FaHeart className="text-xl" />
                ) : (
                  <FaRegHeart className="text-xl" />
                )}
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {/* <img
                src={homeData.image}
                alt={homeData.title}
                className="w-full h-96 object-cover"
              /> */}
              <Image
                src={homeData.image}
                alt={homeData.title}
                width={600}
                height={600}
                className="w-full h-96 object-cover"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                  {homeData.status}
                </span>
              </div>
            </div>

            {/* Title and Location */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {homeData.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-purple-600" />
                    <span className="text-lg">{homeData.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <MdPlace className="text-purple-500" />
                    <span>{homeData.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Price</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    ${homeData.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Property Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <FaBed className="text-3xl text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {homeData.bedrooms}
                  </p>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-xl">
                  <FaBath className="text-3xl text-pink-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {homeData.bathrooms}
                  </p>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <FaRulerCombined className="text-3xl text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {homeData.areaSqFt}
                  </p>
                  <p className="text-sm text-gray-600">Sq Ft</p>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-xl">
                  <FaCalendarAlt className="text-3xl text-pink-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">
                    {homeData.yearBuilt}
                  </p>
                  <p className="text-sm text-gray-600">Year Built</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {homeData.description}
              </p>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Property Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaHome className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Property Type</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {homeData.propertyType}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <FaTag className="text-2xl text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {homeData.status}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <FaDollarSign className="text-2xl text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Currency</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {homeData.currency}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-3 bg-pink-100 rounded-lg">
                    <FaCalendarAlt className="text-2xl text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Year Built</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {homeData.yearBuilt}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Agent
                </h3>
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <FaPhone />
                    Call Now
                  </button>
                  <button className="w-full bg-purple-100 text-purple-700 py-4 rounded-xl font-semibold hover:bg-purple-200 transition-all flex items-center justify-center gap-2">
                    <FaEnvelope />
                    Send Message
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Price Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-white/20">
                    <span>Listing Price</span>
                    <span className="text-2xl font-bold">
                      ${homeData.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Price per Sq Ft</span>
                    <span className="font-semibold">
                      ${Math.round(homeData.price / homeData.areaSqFt)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Property ID</span>
                    <span className="font-semibold text-gray-900">
                      #{homeData.id}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Type</span>
                    <span className="font-semibold text-gray-900">
                      {homeData.propertyType}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-gray-600">Location</span>
                    <span className="font-semibold text-gray-900">
                      {homeData.location}
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Status</span>
                    <span className="font-semibold text-purple-600">
                      {homeData.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetailsPage;
